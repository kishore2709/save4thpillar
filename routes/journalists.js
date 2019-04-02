const express = require("express");
const router = express.Router();

// Journalists home page
router.get("/", (req, res) => {
  res.send("Welcome to journalists page");
});

module.exports = router;
