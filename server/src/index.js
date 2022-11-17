require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// Models
const ItemModel = require("./models/Item");
const CategoryModel = require("./models/Category");
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
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// Sends all the available categories to the client
app.get("/all-categories", async (req, res) => {
    const categories = await CategoryModel.find();
    res.json(categories);
});
app.get("/category2", (req, res) => {
    res.send("category2");
});
// _______________________________________________________________________
// POSTS _________________________________________________________________
// post a new category to the database
app.post("/create-category", async (req, res) => {
    // create a new category
    const newCategory = new CategoryModel({
        name: req.body.name,
        items: [],
    });
    // save the new category to the database
    await newCategory.save();
    res.send("category created");
});
// _______________________________________________________________________

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
