// PACKAGES
const mongoose = require("mongoose");

// MODELS
const Post = require("./models/post");

const seeds = [
    {
        title: "dummy dummy title",
        author: "prathik",
        image: "https://images.squarespace-cdn.com/content/56a63f324bf11808a0b9e5fc/1587656722340-9N744HBVZNLIC5J0HCPI/Pilot+%28Thumbnail%29.jpg?format=750w&content-type=image%2Fjpeg",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat arcu ut enim tempor imperdiet condimentum eget dolor. Cras ut purus arcu. Nulla ac quam dolor. Nulla nisl magna, pellentesque et tellus volutpat, egestas luctus lacus. Fusce congue euismod nulla aliquet pretium. Duis eu urna hendrerit, laoreet metus vel, dictum nisi. Nulla facilisi."
    },
    {
        title: "dummy dummy title",
        author: "prathik",
        image: "https://images.squarespace-cdn.com/content/56a63f324bf11808a0b9e5fc/1584461731075-BLBP5OJL6AKJ6P6Y0LOO/03_17_2020.jpg?format=750w&content-type=image%2Fjpeg",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat arcu ut enim tempor imperdiet condimentum eget dolor. Cras ut purus arcu. Nulla ac quam dolor. Nulla nisl magna, pellentesque et tellus volutpat, egestas luctus lacus. Fusce congue euismod nulla aliquet pretium. Duis eu urna hendrerit, laoreet metus vel, dictum nisi. Nulla facilisi."
    },
    {
        title: "dummy dummy title",
        author: "prathik",
        image: "https://images.squarespace-cdn.com/content/56a63f324bf11808a0b9e5fc/1583201657480-X4WZAFIHK6IG043P7WIA/studio-rubric-website-templates.jpg?format=750w&content-type=image%2Fjpeg",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat arcu ut enim tempor imperdiet condimentum eget dolor. Cras ut purus arcu. Nulla ac quam dolor. Nulla nisl magna, pellentesque et tellus volutpat, egestas luctus lacus. Fusce congue euismod nulla aliquet pretium. Duis eu urna hendrerit, laoreet metus vel, dictum nisi. Nulla facilisi."
    }
];

async function seedDB() {
    try {
        await Post.deleteMany({});
        for (const seed of seeds) {
            await Post.create(seed);
        }
    } catch(err) {
        console.log(err);
    }
}

module.exports = seedDB;