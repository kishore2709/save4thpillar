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
const Admin = require("../models/Admin");

// Admin home page
router.get("/", (req, res) => {
  res.send("Welcome to admin page");
});

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // cheking validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { name, email, password } = req.body;

  // Validaation passed and next is to find the user
  Admin.findOne({ email: email }).then(user => {
    if (user) {
      // user found in DB
      errors.email = "Email is already registered";
      res.json(errors);
    } else {
      const newAdmin = new Admin({
        name: name,
        email: email,
        password: password
      });

      // Generating Hash Password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
          if (err) throw err;

          // set pass to Hash
          newAdmin.password = hash;

          // Lets save to DB
          newAdmin
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

// Admin Login
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // cheking validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { email, password } = req.body;
  console.log(req.body);

  Admin.findOne({ email }).then(user => {
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
          email: user.email
        };

        // Signing the Token
        jwt.sign(
          payload,
          keys.SecretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

module.exports = router;
