const express = require("express");

const path = require('path');

const router = express.Router();

const rootPath = require('..utils/path');

router.get("/", (req, res, next) => {
     res.sendFile(__dirname, "public", "index.html")
});

module.exports = router;