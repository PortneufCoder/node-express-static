const express = require("express");

const path = require('path');

const router = express.Router();

const rootPath = require('..utils/path');

router.get("/tours", (req, res, next) => {
  res.sendFile(path.join(rootPath, 'public', 'tours.html')); // replaces native node responses
  
}); // __dirname points to the folder holding the file where you construct it e.g routes

module.exports = router;