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

  let errors = {
    name: "",
    email: "",
    password: "",
    password2: "",
    passMatch: "",
    passLength: ""
  };

  if (!name) {
    errors.name = "Name field is required";
    res.status(400).json(errors);
  }
  if (!email) {
    errors.email = "Email field is required";
    res.status(400).json(errors);
  }
  if (!password) {
    errors.password = "Password field is required";
    res.status(400).json(errors);
  }
  if (!password2) {
    errors.password2 = "re enter your password";
    res.status(400).json(errors);
  }

  if (password != password2) {
    errors.passMatch = "password must match";
    res.status(400).json(errors);
  }

  if (password.length < 6) {
    errors.passLength = "Password must be at least 6 characters";
    res.status(400).json(errors);
  }

  if (errors.length > 0) {
  } else {
    // Validaation passed and next is to find the user
    User.findOne({ email: email }).then(user => {
      if (user) {
        // user found in DB
        res.json({ msg: "Email is already registered" });
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
                req.flash(
                  "success_msg",
                  "You are now registered and can log in"
                );
                res.json({ msg: "You are now registered and can log in" });
                res.redirect("/users/login");
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
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
    password: ""
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
          return res.json({ password: "password incorrect" });
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
