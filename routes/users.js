const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const keys = require("../config/keys");
const jwt = require("jsonwebtoken");
const passport = require("passport");

//Input Validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// user Model
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
  const { errors, isValid } = validateRegisterInput(req.body);

  // cheking validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { name, email, password } = req.body;

  // Validaation passed and next is to find the user
  User.findOne({ email: email }).then(user => {
    if (user) {
      // user found in DB
      errors.email = "Email is already registered";
      res.json(errors);
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
              res.json({ msg: "You are now registered and can log in" });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// Login Handle
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // cheking validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email, password } = req.body;
  console.log(req.body);

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "user not found";
      return res.status(404).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched now sign the payload with JWT token
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email,
          rating: user.rating
        };

        // Signing the Token
        jwt.sign(
          payload,
          keys.SecretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({ success: true, token: "Bearer " + token });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// Protected route only for protected route
router.get(
  "/currentuser",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

// Logout Handle
// router.get("/logout", (req, res) => {
//   req.logout();
//   req.flash("success_msg", "you are logged out successfully");
//   res.redirect("/users/login");
// });

// Rating Handler
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let { rating } = req.body;

    console.log(rating);

    User.update(
      { _id: "5c94a614b2f72207c2c5c61d" },
      { $set: { rating: rating } },
      {},
      err => {
        const data = {
          rating
        };
        res.json(data);
      }
    );
  }
);

module.exports = router;
