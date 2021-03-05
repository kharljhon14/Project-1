const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello Baby<</h1>");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`This subreddit is ${subreddit}`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`This subreddit is ${subreddit} with post ID of ${postId}`);
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  res.send(`<h1>Search results of ${q} </h1>`);
});

app.get("/cats", (req, res) => {
  res.send("Hello I am a cat");
});

app.get("/dogs", (req, res) => {
  res.send("Hello I am a dog");
});

app.get("*", (req, res) => {
  res.send("Where am I?");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server startdedon ${PORT}`));
