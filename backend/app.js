const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require('mongoose')

const Post = require('./models/post')

const app = express();
const uri = "mongodb+srv://adel:9UpSQ1iH6Xp5ls71@mean-practice.ingw5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!')
  })
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS")
  next();
});


app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  res.status(201).json({
    message: 'post added successfully'
  })

} )
app.get("/api/posts", (req, res, next) => {
  const posts =[
    {
      id: "fds2343fsdf",
      title: "first server-side post",
      content: "this is  coming from the server!"
    },
    {
      id: "dfsd324rr",
      title: "second server-side post",
      content: "this is  coming from the server too!"
    },
    {
      id: "sdfsdf2342fds",
      title: "third server-side post",
      content: "this is  coming from the server three!"
    },
  ];
  res.status(200).json({
    message: 'posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
