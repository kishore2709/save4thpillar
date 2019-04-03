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

// Admin Register
router.post("/login", (req, res) => {
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
          Admin.password = hash;

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
module.exports = router;
