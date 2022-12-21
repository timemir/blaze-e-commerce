const ItemModel = require("../models/Item");
const CategoryModel = require("../models/Category");
//________________________________________________________________________
// GETS __________________________________________________________________
async function getItemsFromCategoryController(req, res) {
    // Get all items that are inside a category
    const items = await ItemModel.find({ category: req.params.categoryId });
    res.json(items);
}
async function getItemController(req, res) {
    // Get a single items
    const item = await ItemModel.findById(req.params.itemId);
    res.json(item);
}
async function getAllItemsController(req, res) {
    // Get all items
    const items = await ItemModel.find();
    res.json(items);
}
//________________________________________________________________________
// POSTS _________________________________________________________________
async function postItemToCategoryController(req, res) {
    // Create a new item
    const categoryId = req.params.categoryId;
    const category = await CategoryModel.findById(categoryId);
    const newItem = new ItemModel({
        brand: req.body.brand,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        images: req.body.images,
        size: req.body.size,
        color: req.body.color,
        available: req.body.available,
        category: req.params.categoryId,
    });
    // Save the new item to the database
    await newItem.save();
    // Add the new item to the category
    category.items.push(newItem);
    await category.save();
    // Send a confirmation message
    res.json({
        message: "item created",
        newItem,
        where: `inside category ${category.name}`,
    });
}
async function deleteItemController(req, res) {
    // Delete an item
    const itemId = req.params.itemId;
    const item = await ItemModel.findById(itemId);
    const category = await CategoryModel.findById(item.category);
    // Remove the item from the category
    category.items = category.items.filter((item) => item != itemId);
    await category.save();
    // Delete the item from the database
    await ItemModel.findById(itemId).deleteOne();
    // Send a confirmation message
    res.json({
        message: "item deleted",
        where: `inside category ${category.name}`,
    });
}
//________________________________________________________________________
module.exports = {
    getItemsFromCategoryController,
    postItemToCategoryController,
    getItemController,
    getAllItemsController,
    deleteItemController,
};
