// PACKAGES
const colorThief = require("colorthief"),
    express = require("express"),
    moment = require("moment"),
    mongoose = require("mongoose");

// MODELS
const Models = require("./models");
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

// MIDDLEWARE
function localVariables (req, res, next) {
    res.locals.path = req.path;
    next();
}
app.use(localVariables);

// ROUTES
app.get("/", async (req, res) => {
    let posts = await Models.Post.find({});
    let features = [
        await Models.Post.findOne({"feature.main": true}),
        await Models.Post.findOne({"feature.side-a": true}),
        await Models.Post.findOne({"feature.side-b": true})
    ];
    res.render("home", {posts: posts, features: features, moment: moment});
});
app.get("/blog/:id", async (req, res) => {
    let post = await Models.Post.findById(req.params.id);
    let stripBackgroundColor = await colorThief.getColor(post.image);
    res.render("show", {post: post, stripBackgroundColor: stripBackgroundColor});
});

// SERVER
app.listen(3000, () => console.log("server started"));