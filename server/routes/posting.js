const express = require("express");
const router = express.Router();
const db = require("../schema/");
const timeAgo = require("../services/timeAgo");

router.get('/:posting/:id', (req, res) => {
    const posting = req.params.posting;
    const id = req.params.id;

    if (posting === 'donation') {
        db.donation.findAll({
            where: {id: id},
            include: [
                {model: db.user, required: true},
                {model: db.category, required: true}
            ]
        })
            .then(donations => {
                console.log('donations', donations);
                const data = {};
                res.send(data);
            })
            .catch((err) => {
                console.error(err.message);
                res.redirect('/');
            })
    } else if (posting === 'request') {
        db.request.findAll({
            where: {id: id},
            include: [
                {model: db.user, required: true},
                {model: db.category, required: true}
            ]
        })
            .then(requests => {
                console.log('requests', requests);
                const data = {};
                res.send(data);
            })
            .catch(err => {
                console.error(err.message);
                res.redirect('/');
            })
    }
});

module.exports = router;