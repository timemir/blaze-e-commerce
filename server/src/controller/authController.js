const config = require("../config/auth");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

function loginController(req, res) {
    User.findOne({
        username: req.body.username,
    })
        // replaces the role IDs with the actual role documents
        .populate("roles", "-__v")
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!",
                });
            }

            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400, // 24 hours
            });

            var authorities = [];

            for (let i = 0; i < user.roles.length; i++) {
                authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
            }
            res.status(200).send({
                id: user._id,
                username: user.username,
                email: user.email,
                roles: authorities,
                accessToken: token,
            });
        });
    // 1. Verify that the email and password are correct.
    // This can be done by querying the database for a user with the given
    // email and password and checking that the user exists and that the password is
    // correct.
    // 2. If the email and password are correct, create a JWT using the
    // jsonwebtoken package. The JWT should contain the user's email and any
    // other relevant information (such as the user's name or ID). You will also
    // need to set an expiration time for the JWT and specify a secret used to sign
    // the JWT.
    // 3. Send the JWT back to the client as the response to the login request.
    // The client can then store the JWT in a cookie or local storage for use
    // in subsequent requests.
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
    // 1. Verify that the email is unique and that all required fields are present.
    // 2. Create a new user in the database with the provided information.
    // 3. Create a JWT for the new user using the same process as in the login route.
    // 4. Send the JWT back to the client as the response to the registration request.
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
};
