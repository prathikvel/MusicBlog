// PACKAGES
const express = require("express"),
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
    let features = {
        main: await Models.Post.findOne({feature: "main"}),
        sideTop: await Models.Post.findOne({feature: "sideTop"}),
        sideBottom: await Models.Post.findOne({feature: "sideBottom"})
    };
    res.render("home", {posts: posts, features: features});
});
app.get("/blog/:id", async (req, res) => {
    let post = await Models.Post.findById(req.params.id);
    res.render("show", {post: post});
});

// SERVER
app.listen(3000, () => console.log("server started"));