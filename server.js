const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();

// Passport config
require("./config/passport")(passport);

// BodyParser Middleware
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));

// Passport middleware
app.use(passport.initialize());

// passport config
require("./config/passport")(passport);

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
app.use("/channels", require("./routes/channels"));
app.use("/journalists", require("./routes/journalists"));
app.use("/admin", require("./routes/admin"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running at ${port}`));
