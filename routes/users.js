const express = require("express");

const router = express.Router();

const User = require("../models/User");

// Login @route
router.get("/login", (req, res) => {
  res.send("Login user");
});

// Register @route
router.get("/register", (req, res) => {
  res.send("Register user");
});

// Register Handle
router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;
  console.log(req.body);

  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ msg: "Please enter all fields" });
  }

  if (password != password2) {
    errors.push({ msg: "Passwords do not match" });
  }

  if (password.length < 6) {
    errors.push({ msg: "Password must be at least 6 characters" });
  }

  if (errors.length > 0) {
    res.render("register", {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    // Validaation passed and next is to find the user
    User.findOne({ email: email }).then(user => {
      if (user) {
        // user found in DB
        errors.push({ msg: "Email is already registered" });
        res.render("register", {
          errors: errors,
          name: name,
          email: email,
          password: password,
          password2: password2
        });
      } else {
        const newUser = new User({
          name: name,
          email: email,
          password: password
        });

        console.log(newUser);
        res.send("user created but not saved to DB");
      }
    });
  }
});

module.exports = router;
