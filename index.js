// PACKAGES
const express = require("express"),
    mongoose = require("mongoose");

// MODELS
const Post = require("./models/post");
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
    let posts = await Post.find({});
    res.render("home", {posts: posts});
});
app.get("/blog/:id", async (req, res) => {
    let post = await Post.findById(req.params.id);
    res.render("show", {post: post});
});

// SERVER
app.listen(3000, () => console.log("server started"));