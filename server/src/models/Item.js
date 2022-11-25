const mongoose = require("mongoose");

// create a mongoose schema for a shop item
const ItemSchema = new mongoose.Schema({
    brand: String,
    name: String,
    price: Number,
    description: String,
    images: [{ url: String, alt: String }], // {url: String, alt: String}
    size: [{ name: String, inStock: Boolean }],
    color: [{ name: String, class: String, selectedClass: String }],
    available: Boolean,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

// create a mongoose model for a shop item

const ItemModel = mongoose.model("Item", ItemSchema);

// export the model

module.exports = ItemModel;
