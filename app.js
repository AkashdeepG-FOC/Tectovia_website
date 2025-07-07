const express = require("express");
const app = express();
const nodemailer = require('nodemailer');

const expressLayout = require("express-ejs-layouts");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(expressLayout);
app.set("layout", "./layout/main");

app.set("view engine", "ejs");

const router = require("./server/router/router");
app.use(router);




app.listen("5000", () => console.log("server run on 5000"));
