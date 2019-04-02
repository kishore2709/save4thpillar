const express = require("express");
const router = express.Router();

// Channel home page
router.get("/", (req, res) => {
  res.send("Welcome to channel page");
});

module.exports = router;
