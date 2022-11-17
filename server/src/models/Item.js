const mongoose = require("mongoose");

// create a mongoose schema for a shop item
const ItemSchema = new mongoose.Schema({
    brand: String,
    name: String,
    price: Number,
    description: String,
    image: String,
    size: String,
    color: String,
    available: Boolean,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

// create a mongoose model for a shop item

const ItemModel = mongoose.model("Item", ItemSchema);

// export the model

module.exports = ItemModel;
