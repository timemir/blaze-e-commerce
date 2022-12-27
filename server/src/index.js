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
    allAccess,
    userBoard,
    moderatorBoard,
    adminBoard,
    refreshTokenController,
} = require("./controller/authController");
const { verifySignUp, authJWT } = require("./middlewares");
const db = require("./models");
const Role = db.role;
// --------------------
// SETUP _________________________________________________________________
const app = express();

// Allow requests from any origin (for now TODO: restrict this later)
app.use(cors());
// Some middleware to parse the body of requests as JSON
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

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

// Auth
// Auth Testing
app.get("/test/all", allAccess);
app.get("/test/user", [authJWT.verifyToken], userBoard);
app.get(
    "/test/mod",
    [authJWT.verifyToken, authJWT.isModerator],
    moderatorBoard
);
app.get("/test/admin", [authJWT.verifyToken, authJWT.isAdmin], adminBoard);
// _______________________________________________________________________

// POSTS _________________________________________________________________
// Categories
app.post("/categories", postCategoryController);

// Items
app.post("/categories/:categoryId/item", postItemToCategoryController);

// Auth
app.post("/auth/login", loginController);
app.post(
    "/auth/register",
    [
        verifySignUp.checkDuplicateUsernameOrEmail,
        verifySignUp.checkRolesExisted,
    ],
    registerController
);
app.post("/auth/refreshToken", refreshTokenController);
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
        initial();
    } catch (error) {
        console.log(error);
    }
};

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user",
            }).save((err) => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "moderator",
            }).save((err) => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin",
            }).save((err) => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}

const startServer = async () => {
    await connectToDb();
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
};

startServer().catch((err) => {
    console.log(err);
});
