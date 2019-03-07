const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// DB connect
mongoose
  .connect(db)
  .then(() => {
    console.log("database connected");
  })
  .catch(err => {
    console.log(err);
  });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running at ${port}`));
