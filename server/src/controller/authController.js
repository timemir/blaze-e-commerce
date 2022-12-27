const config = require("../config/auth");
const db = require("../models");
const User = db.user;
const Role = db.role;
const RefreshToken = db.refreshToken;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

function loginController(req, res) {
    User.findOne({
        username: req.body.username,
    })
        // replaces the role IDs with the actual role documents
        .populate("roles", "-__v")
        .exec(async (err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            // check if the password is valid
            let passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!",
                });
            }

            // creation of access token
            let token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: config.jwtExpiration, // 24 hours
            });

            // once the user is logged in, create a refresh token
            let refreshToken = await RefreshToken.createToken(user);

            let authorities = [];

            for (let i = 0; i < user.roles.length; i++) {
                authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
            }
            res.status(200).send({
                id: user._id,
                username: user.username,
                email: user.email,
                roles: authorities,
                accessToken: token,
                refreshToken: refreshToken,
            });
        });
}

async function refreshTokenController(req, res) {
    const { refreshToken: requestToken } = req.body;

    // if there is no token in the request body, return an error
    if (requestToken == null) {
        return res.status(403).json({ message: "Refresh Token is required!" });
    }

    try {
        // find the refresh token in the database
        let refreshToken = await RefreshToken.findOne({ token: requestToken });

        // if the token is not in the database (it expired), return an error
        if (!refreshToken) {
            res.status(403).json({
                message: "Refresh token is not in database!",
            });
            return;
        }

        // check if the token is expired
        if (RefreshToken.verifyExpiration(refreshToken)) {
            // if the token is expired, delete it from the database
            RefreshToken.findByIdAndRemove(refreshToken._id, {
                useFindAndModify: false,
            }).exec();

            res.status(403).json({
                message:
                    "Refresh token was expired. Please make a new signin request",
            });
            return;
        }

        // create a new access token, if the refresh token is valid
        let newAccessToken = jwt.sign(
            { id: refreshToken.user._id },
            config.secret,
            {
                expiresIn: config.jwtExpiration,
            }
        );
        // send the new access token and the old refresh token back to the client
        return res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: refreshToken.token,
        });
    } catch (err) {
        // if there is an unexpected error, return it
        return res.status(500).send({ message: err });
    }
}

function registerController(req, res) {
    // create a new user document
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    });

    // save the user to the database
    user.save((err, user) => {
        // Error handling
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (req.body.roles) {
            Role.find(
                {
                    name: { $in: req.body.roles },
                },
                (err, roles) => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }

                    user.roles = roles.map((role) => role._id);
                    user.save((err) => {
                        if (err) {
                            res.status(500).send({ message: err });
                            return;
                        }

                        res.send({
                            message: "User was registered successfully!",
                        });
                    });
                }
            );
        } else {
            Role.findOne({ name: "user" }, (err, role) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }

                user.roles = [role._id];
                user.save((err) => {
                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }

                    res.send({ message: "User was registered successfully!" });
                });
            });
        }
    });
}

// TESTS
function allAccess(req, res) {
    res.status(200).send("Public Content.");
}

function userBoard(req, res) {
    res.status(200).send("User Content.");
}

function moderatorBoard(req, res) {
    res.status(200).send("Moderator Content.");
}

function adminBoard(req, res) {
    res.status(200).send("Admin Content.");
}

module.exports = {
    loginController,
    registerController,
    allAccess,
    userBoard,
    moderatorBoard,
    adminBoard,
    refreshTokenController,
};
