const CategoryModel = require("../models/Category.js");

//________________________________________________________________________
// GETS __________________________________________________________________
async function getAllCategoriesController(req, res) {
    // Get all categories from the database
    const categories = await CategoryModel.find();

    // Send the categories as a JSON response
    res.json(categories);
}

async function getCategoryController(req, res) {
    const categoryId = req.params.categoryId;
}

//________________________________________________________________________
// POSTS _________________________________________________________________
async function postCategoryController(req, res) {
    // Create a new category
    const newCategory = new CategoryModel({
        title: req.body.title,
        link: req.body.link,
    });
    // Save the new category to the database
    await newCategory.save();
    // Send a confirmation message
    res.send("category created");
}

//________________________________________________________________________
// DELETES _______________________________________________________________
async function deleteCategoryController(req, res) {
    // Get the id of the category to delete
    const categoryId = req.params.categoryId;
    // Delete the category from the database
    const deletedCategory = await CategoryModel.findByIdAndDelete(categoryId);
    // Send a confirmation message
    res.json({
        message: "category deleted",
        deletedCategory,
    });
}
module.exports = {
    getAllCategoriesController,
    getCategoryController,
    postCategoryController,
    deleteCategoryController,
};
