const express = require("express")

const app = express();

app.use((req, res, next) => {
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
