const express = require("express");
const router = express.Router();

// Channel home page
router.get("/", (req, res) => {
  res.send("Welcome to admin page");
});

module.exports = router;
