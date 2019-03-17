const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// BodyParser Middleware
// app.use(bodyParser.json());

// DB config
// const db = require("./config/keys").mongoURI;

// DB connect
// { useNewUrlParser: true } added so i can add '$' in my pass character
// mongoose
//   .connect(db, { useNewUrlParser: true })
//   .then(() => {
//     console.log("database connected");
//   })
//   .catch(err => {
//     console.log(err);
//   });

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running at ${port}`));
