const express = require("express");
const router = express.Router();
const db = require("../schema/");
const timeAgo = require("../services/timeAgo");

router.get('/categories', (req, res) => {

    console.log("outside")
    db.category.findAll()
        .then(category => {
            console.log('category:', category);
            const data = {};
            res.send(data);
        })

});

module.exports = router;