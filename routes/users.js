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
    res.send(req.body);
  }

  if (password != password2) {
    errors.push({ msg: "Passwords do not match" });
    res.send(req.body);
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
    res.send("Registration passed");
  }
});

module.exports = router;
