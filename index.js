// PACKAGES
const express = require("express");

// CONFIG
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"))

// ROUTES
app.get("/", (req, res) => {
    res.render("index");
});

// SERVER
app.listen(3000, () => console.log("server started"));