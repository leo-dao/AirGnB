const express = require('express');
const router = express.Router();
const AdSchema = require('../models/Ad');

router.post('/', (req, res) => {
    console.log(req.body);
    const newAd = new AdSchema({
        title: req.body.title,
        _id: req.body.id,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        images: req.body.images
    })
    newAd.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

module.exports = router;