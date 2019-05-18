const express = require("express");
const router = express.Router();
const db = require("../models/");
const timeAgo = require("../functions/timeAgo");

router.get('/allCategories', (req, res) => {

    db.category.findAll()
        .then(category => {
            console.log('category:', category);
            res.send(data);
        })

});