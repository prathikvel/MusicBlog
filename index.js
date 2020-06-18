// PACKAGES
const express = require("express"),
    moment = require("moment"),
    mongoose = require("mongoose");

// MODELS
const Models = require("./models/");
const seedDB = require("./seedDB");

// CONFIG
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
mongoose.connect('mongodb://localhost/koushik', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
seedDB();

// ROUTES
app.get("/", async (req, res) => {
    let posts = await Models.Post.find({});
    let features = [
        await Models.Post.findOne({feature: "main"}),
        await Models.Post.findOne({feature: "side-a"}),
        await Models.Post.findOne({feature: "side-b"})
    ];
    res.render("home", {posts: posts, features: features, moment: moment});
});
app.get("/blog/:id", async (req, res) => {
    let post = await Models.Post.findById(req.params.id);
    res.render("show", {post: post});
});

// SERVER
app.listen(3000, () => console.log("server started"));