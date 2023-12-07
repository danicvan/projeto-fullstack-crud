const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
    fs.readFile("./src/data/login.json", "utf-8", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(data);
        return res.end();
    });
});

module.exports = router;
