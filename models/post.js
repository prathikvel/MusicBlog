// PACKAGES
const mongoose = require("mongoose");

// SCHEMA
const postSchema = new mongoose.Schema({
    title: String,
    author: String,
    date: { type: Date, default: Date.now },
    description: String,
    tags: [String],
    rating: Number,
    image: String,
    body: String,
    metadata: {
        type: {
            album: { type: Boolean, default: false },
            track: { type: Boolean, default: false }
        },
        album: String,
        track: String,
        artist: String,
        genre: String
    },
    feature: {
        main: { type: Boolean, default: false },
        "side-a": { type: Boolean, default: false },
        "side-b": { type: Boolean, default: false }
    }
});

// EXPORT
module.exports = mongoose.model("Post", postSchema);