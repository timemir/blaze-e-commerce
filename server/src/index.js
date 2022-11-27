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
} = require("./controller/itemController");
// --------------------
// SETUP _________________________________________________________________
const app = express();

// Allow requests from any origin (for now TODO: restrict this later)
app.use(cors());
// Some middleware to parse the body of requests as JSON
app.use(express.json());

const PORT = 3000;
//________________________________________________________________________
// GETS __________________________________________________________________
app.get("/", getHomeController);
app.get("/categories", getAllCategoriesController);
app.get("/categories/:categoryId", getCategoryController);
app.get("/categories/:categoryId/items", getItemsFromCategoryController);
app.get("/items/:itemId", getItemController);
// _______________________________________________________________________
// POSTS _________________________________________________________________
// post a new category to the database
app.post("/categories", postCategoryController);

app.post("/categories/:categoryId/item", postItemToCategoryController);
// _______________________________________________________________________
// DELETES _______________________________________________________________
app.delete("/categories/:categoryId", deleteCategoryController);
app.delete("/items/:itemId", deleteItemController);

// _______________________________________________________________________

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
