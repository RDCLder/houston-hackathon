// const express = require('express');
// const router = express.Router();
// const db = require('../schema');
// const timeAgo = require('../services/timeAgo');
//
// router.get('/', function (req, res, next) {
//     let results = {};
//
//     db.category
//         .findAll({
//             include: [
//                 {
//                     model: db.donation,
//                     required: true
//                 },
//                 {
//                     model: db.request,
//                     required: true
//                 }
//             ],
//             order: [['updatedAt', 'DESC']]
//         });
//
// });
//
// module.exports = router;
