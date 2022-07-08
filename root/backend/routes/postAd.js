const express = require('express');
const router = express.Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const AdSchema = require('../models/Ad');
const upload = require('../middleware/upload')

router.post('/', upload.array('images', 6), async (req, res, next) => {

    const {
        title,
        id,
        category,
        description,
        price
    } = req.body;

    let images = [];

    req.files.forEach((file) => {
        let image = {
            img: file.filename,
            id: uuidv4()
        }
        images.push(image)
    })

    try {
        const newAd = new AdSchema({
            title: title,
            category: category,
            description: description,
            price: price,
            images: images
        })

        await newAd.save();
    }
    catch (err) {
        next(err)
    }
});

module.exports = router;