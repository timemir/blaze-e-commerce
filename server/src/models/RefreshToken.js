const mongoose = require("mongoose");
const config = require("../config/auth");
const { v4: uuidv4 } = require("uuid");

const RefreshTokenSchema = new mongoose.Schema({
    token: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    expiryDate: Date,
});

RefreshTokenSchema.statics.createToken = async function (user) {
    // Create a new date object with the current time
    let expiredAt = new Date();

    // Add the number of seconds in the config to the current time
    expiredAt.setSeconds(expiredAt.getSeconds() + config.jwtRefreshExpiration);

    // Create a new refresh token
    let _token = uuidv4();

    // Create a new refresh token object
    let _object = new this({
        token: _token,
        user: user._id,
        expiryDate: expiredAt.getTime(),
    });

    console.log(_object);

    // Save the refresh token object
    let refreshToken = await _object.save();

    return refreshToken.token;
};

RefreshTokenSchema.statics.verifyExpiration = (token) => {
    // returns true if the token is expired (less than the current time)
    return token.expiryDate.getTime() < new Date().getTime();
};

const RefreshToken = mongoose.model("RefreshToken", RefreshTokenSchema);

module.exports = RefreshToken;
