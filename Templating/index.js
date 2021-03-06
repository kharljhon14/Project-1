//Express
const express = require("express");
const app = express();
const path = require("path");

//Looking for ejs & setting path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/cat", (req, res) => {
  const cats = ["Shiro", "Hotdog", "Bella", "Putot II", "Winter", "8 Kittens"];
  res.render("cats", {cats});
});

app.get("/rand", (req, res) => {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  res.render("random", { rand: randomNum });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.render("subreddit", { subreddit });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening for port: ${PORT}`);
});
