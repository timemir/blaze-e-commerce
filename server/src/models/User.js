const mongoose = require("mongoose");

// create a mongoose schema for a user
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role",
        },
    ],
});
// create a mongoose model for a user
const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
