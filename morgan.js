const express = require("express");
const morgan = require('morgan');
const app = express();
app.use(morgan('tiny'))
app.get("/", (req, res) => {
  res.send("<h1>i am home page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>i am about page</h1>");
});

app.all("*", (req, res) => {
    res.send("<h1> page no found that you are looking</h1>");
  });

app.listen(6, () => {
  console.log("server listing");
});
