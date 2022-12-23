const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
    name: String,
});

const RoleModel = mongoose.model("Role", RoleSchema);

module.exports = RoleModel;
