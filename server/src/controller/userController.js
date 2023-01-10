const UserModel = require("../models/User");
const RoleModel = require("../models/Role");
//________________________________________________________________________
// GETS __________________________________________________________________
async function getUserByIdController(req, res) {
    // Get user by id
    try {
        let user = await UserModel.findById(req.params.userId)
            .select("-password -__v")
            .populate("roles", "name -_id");
        // Filter out password field

        res.json(user);
    } catch (err) {
        console.log(err);
    }
}
async function getUsersController(req, res) {
    // Get all users
    try {
        const users = await UserModel.find()
            .select("-password -__v") // Filter out password & __v field
            .populate("roles", "name -_id"); // Replace role id with role name

        res.json(users);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getUserByIdController,
    getUsersController,
};
