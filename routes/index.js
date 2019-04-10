const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

// Home page
router.get("/", (req, res) => {
    res.send("Welcome to home page! testing ");
});

// Dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) =>
    res.render("dashboard", {
        name: req.user.name
    })
);

module.exports = router;
