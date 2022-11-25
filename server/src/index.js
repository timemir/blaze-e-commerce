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
app.get("/all-categories", getAllCategoriesController);
app.get("/category/:categoryId", getCategoryController);
app.get("/category/:categoryId/item", getItemsFromCategoryController);
app.get("/item/:itemId", getItemController);
// _______________________________________________________________________
// POSTS _________________________________________________________________
// post a new category to the database
app.post("/category", postCategoryController);

app.post("/category/:categoryId/item", postItemToCategoryController);
// _______________________________________________________________________
// DELETES _______________________________________________________________
app.delete("/category/:categoryId", deleteCategoryController);
app.delete("/item/:itemId", deleteItemController);

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
