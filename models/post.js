// PACKAGES
const mongoose = require("mongoose");

// SCHEMA
const postSchema = new mongoose.Schema({
    title: String,
    author: String,
    date: { type: Date, default: Date.now },
    image: String,
    body: String,
    feature: String
});

// EXPORT
module.exports = mongoose.model("Post", postSchema);