const express = require("express");
const router = express.Router();

// Journalists home page
router.get("/", (req, res) => {
    res.send("Welcome to fake news API");
});

module.exports = router;
