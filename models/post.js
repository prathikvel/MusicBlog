// PACKAGES
const mongoose = require("mongoose");

// SCHEMA
const postSchema = new mongoose.Schema({
    title: String,
    author: String,
    image: String,
    body: String,
    date: { type: Date, default: Date.now }
});

// EXPORT
module.exports = mongoose.model("Post", postSchema);