require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {
    getAllCategoriesController,
    getCategoryController,
    postCategoryController,
    deleteCategoryController,
} = require("./controller/categoryController");
const { getHomeController } = require("./controller/homeController");
const {
    postItemToCategoryController,
    getItemsFromCategoryController,
    getItemController,
    deleteItemController,
    getAllItemsController,
} = require("./controller/itemController");
const {
    loginController,
    registerController,
} = require("./controller/authController");
// --------------------
// SETUP _________________________________________________________________
const app = express();

// Allow requests from any origin (for now TODO: restrict this later)
app.use(cors());
// Some middleware to parse the body of requests as JSON
app.use(express.json());

const PORT = 3000;
//________________________________________________________________________
// ROUTES #################################################################
// GETS __________________________________________________________________
// Home
app.get("/", getHomeController);

// Categories
app.get("/categories", getAllCategoriesController);
app.get("/categories/:categoryId", getCategoryController);

// Items
app.get("items", getAllItemsController);
app.get("/categories/:categoryId/items", getItemsFromCategoryController);
app.get("/items/:itemId", getItemController);

// _______________________________________________________________________

// POSTS _________________________________________________________________
// Categories
app.post("/categories", postCategoryController);

// Items
app.post("/categories/:categoryId/item", postItemToCategoryController);

// Auth
app.post("auth/login", loginController);
app.post("auth/register", registerController);
// _______________________________________________________________________

// DELETES _______________________________________________________________
// Categories
app.delete("/categories/:categoryId", deleteCategoryController);

// Items
app.delete("/items/:itemId", deleteItemController);

// _______________________________________________________________________
// #######################################################################

// Connect to MongoDB
const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
};

const startServer = async () => {
    await connectToDb();
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
};

startServer().catch((err) => {
    console.log(err);
});
