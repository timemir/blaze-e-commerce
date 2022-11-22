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
    // Send the message "Hello World!" to the client
    res.send("Hello World!");
});
app.get("/all-categories", async (req, res) => {
    // Get all categories from the database
    const categories = await CategoryModel.find();

    // Send the categories as a JSON response
    res.json(categories);
});
app.get("/category2", (req, res) => {
    res.send("category2");
});
// _______________________________________________________________________
// POSTS _________________________________________________________________
// post a new category to the database
app.post("/create-category", async (req, res) => {
    // Create a new category
    const newCategory = new CategoryModel({
        name: req.body.name,
        items: [],
    });
    // Save the new category to the database
    await newCategory.save();
    // Send a confirmation message
    res.send("category created");
});
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
