const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
require("dotenv").config();
const routes = require("./router/tasks");
const app = express();

// using override to update the data
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
// I used .env file to store  the link from MongoDB
// here should be the link from mongoDB
mongoose.connect(process.env.db);

const PORT = process.env.PORT || 3000;

app.use("/", routes);
app.listen(PORT, () => console.log(`the server started at port ${PORT}`));
