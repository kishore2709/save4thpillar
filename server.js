const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const flash = require("connect-flash");
const session = require("express-session");

const app = express();

// BodyParser Middleware
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));

// Express Session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

// Connect flash
app.use(flash());

// Global Vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});

// DB config
const db = require("./config/keys").mongoURI;

// DB connect
// { useNewUrlParser: true } added so i can add '$' in my pass character
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDb conncected...");
  })
  .catch(err => {
    console.log(err);
  });

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running at ${port}`));
