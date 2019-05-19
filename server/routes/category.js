const express = require("express");
const router = express.Router();
const db = require("../schema/");
const timeAgo = require("../services/timeAgo");

router.get('/category/:categoryType', (req, res) => {
    const categoryName = req.params.categoryType;

    let results = {};
    db.category.findOne({
        where: {name: categoryName}
    })
        .then(category => {
            db.donation.findAll({
                where: {category_name: category.dataValues.name},
                include: [
                    {model: db.user, required: true}
                ]
            })
                .then(donations => {
                    results['donations'] = donations;
                })
        })
        .then(() => {
            db.request.findAll({
                where: {category_name: category.dataValues.name},
                include: [
                    {model: db.user, required: true}
                ]
            })
                .then(requests => {
                    results['requests'] = requests;
                    console.log('results', results);
                    const data = {};
                    res.send(data);
                })
        })
        .catch(err => {
            console.error(err.message);
            res.redirect('/');
        })

});

module.exports = router;