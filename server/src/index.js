const express = require("express");
const mongoose = require("mongoose");
// Models
const ItemModel = require("./models/Item");
const CategoryModel = require("./models/Category");
// --------------------
// SETUP _________________________________________________________________
const app = express();
// Some middleware to parse the body of requests as JSON
app.use(express.json());

const PORT = 3000;
//________________________________________________________________________
// GETS __________________________________________________________________
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// In the future this needs to be the HTML file that will be served to the client
app.get("/category1", (req, res) => {
    res.send("category1");
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
    .connect(
        "mongodb+srv://blazeAdmin:zUYghnfT4EHGYILZ@blaze.lfsl1gv.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
