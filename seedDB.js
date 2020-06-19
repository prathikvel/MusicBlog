// PACKAGES
const mongoose = require("mongoose");

// MODELS
const Models = require("./models");

const seeds = [
    {
        author: "prathik",
        description: "this is a really cool album bro",
        rating: 10,
        image: "https://media.pitchfork.com/photos/5929ac7fc0084474cd0c1583/1:1/w_320/831179e9.jpeg",
        body: "<p>blah blah blah</p><p>blah blah blah</p><p>blah blah blah</p>",
        metadata: {
            type: {
                album: true
            },
            album: "My Beautiful Dark Twisted Fantasy",
            artist: "Kanye West",
            genre: "Rap"
        },
        feature: {
            main: true
        }
    },
    {
        author: "prathik",
        description: "i love this song",
        image: "https://media.pitchfork.com/photos/5929b07ac0084474cd0c1c63/1:1/w_320/eae6dd69.jpg",
        body: "<p>blah blah blah</p><p>blah blah blah</p><p>blah blah blah</p>",
        metadata: {
            type: {
                track: true
            },
            album: "Rodeo",
            track: "Pray 4 Love (feat. The Weeknd)",
            artist: "Travis Scott",
            genre: "Rap"
        },
        feature: {
            "side-a": true
        }
    },
    {
        title: "custom article",
        author: "prathik",
        description: "this is a custom article",
        image: "https://media.pitchfork.com/photos/5eec12ef464fe661509aa192/2:1/w_2560%2Cc_limit/Mercury%252520Lounge.jpg",
        body: "<p>blah blah blah</p><p>blah blah blah</p><p>blah blah blah</p>",
        feature: {
            "side-b": true
        }
    }
];

async function seedDB() {
    try {
        await Models.Post.deleteMany({});
        for (const seed of seeds) {
            await Models.Post.create(seed);
        }
    } catch(err) {
        console.log(err);
    }
}

module.exports = seedDB;