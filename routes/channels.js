const express = require("express");
const router = express.Router();

const Channel = require("../models/Channel");

// Channel home page
router.get("/", (req, res) => {
    res.send("Welcome to channel page");
});

router.get("/get-channels", (req, res) => {
    Channel.find().then(channel => {
        if (channel) {
            res.json(channel);
        }
    });
});

module.exports = router;
