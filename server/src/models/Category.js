const mongoose = require("mongoose");

// create a mongoose schema for a category that includes an array of items that are Item models
const CategorySchema = new mongoose.Schema({
    name: String,
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
});

// create a mongoose model for a category
const CategoryModel = mongoose.model("Category", CategorySchema);

// export the model
module.exports = CategoryModel;
