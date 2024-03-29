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
    res.locals.moment = moment;
    next();
}
app.use(localVariables);

// ROUTES
app.get("/", async (req, res) => {
    const posts = await Models.Post.find({});
    const features = [
        await Models.Post.findOne({"feature.main": true}),
        await Models.Post.findOne({"feature.side-a": true}),
        await Models.Post.findOne({"feature.side-b": true})
    ];
    const view = "home";
    res.render(view, {view: view, posts: posts, features: features});
});
app.get("/blog/:id", async (req, res) => {
    const post = await Models.Post.findById(req.params.id);
    const stripBackgroundColor = await colorThief.getColor(post.image);
    const view = "show";
    res.render(view, {view: view, post: post, stripBackgroundColor: stripBackgroundColor});
});

// SERVER
app.listen(3000, () => console.log("server started"));