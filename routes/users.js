const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");

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

  const passMatch = null;
  const passLength = null;

  if (!name) {
    res.status(400).json({ name: "Name is required" });
  }
  if (!email) {
    res.status(400).json({ email: "email is required" });
  }
  if (!password) {
    res.status(400).json({ password: "password is required" });
  }
  if (!password2) {
    res.status(400).json({ password2: "re enter your password" });
  }

  if (password != password2) {
    res.status(400).json({ passMatch: "password must match" });
  }

  if (password.length < 6) {
    res
      .status(400)
      .json({ passLength: "Password must be at least 6 characters" });
  }

  // Validaation passed and next is to find the user
  User.findOne({ email: email }).then(user => {
    if (user) {
      // user found in DB
      res.json({ msg: "Email is already registered" });
    } else {
      const newUser = new User({
        name: name,
        email: email,
        password: password
      });

      // Generating Hash Password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;

          // set pass to Hash
          newUser.password = hash;

          // Lets save to DB
          newUser
            .save()
            .then(user => {
              req.flash("success_msg", "You are now registered and can log in");
              res.json({ msg: "You are now registered and can log in" });
              res.redirect("/users/login");
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// Login Handle
router.post("/login", (req, res) => {
  // passport.authenticate("local", {
  //   successRedirect: "/dashboard",
  //   failureRedirect: "/users/login",
  //   failureFlash: true
  // })(req, res, next);

  const { email, password } = req.body;
  console.log(req.body);

  let errors = {
    email: "",
    password: "",
    passincorrect: ""
  };

  if (!email) {
    errors.email = "Email field is required";
    res.status(400).json(errors);
  }

  if (!password) {
    errors.password = "password field is required";
    res.status(400).json(errors);
  }

  if (errors.length > 0) {
  } else {
    User.findOne({ email }).then(user => {
      if (!user) {
        return res.json({ email: "user not found" });
      }

      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          res.json({ msg: "success! You are now logged in" });
        } else {
          errors.passincorrect = "password incorrect";
          return res.status(400).json(errors);
        }
      });
    });
  }
});

// Logout Handle
router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "you are logged out successfully");
  res.redirect("/users/login");
});
module.exports = router;
