const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Tweet = require('../../models/Tweet');
const validateTweetInput = require('../../validation/tweets');

router.get("/test", (req, res) => res.json({msg: "This is the tweets route"}))

module.exports = router