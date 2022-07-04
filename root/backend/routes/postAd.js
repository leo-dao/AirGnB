const express = require('express');
const router = express.Router();
const multer = require('multer');
const AdSchema = require('../models/Ad');

const storage = multer.diskStorage({
    destination: (req, file, cb) =>
        cb(null, './uploads/'),
    filename: (req, file, cb) =>
        cb(null, new Date().toISOString() + file.originalname)
})

const upload = multer({ storage, limits: { fileSize: (1024 ** 2) * 5 } });

router.post('/', upload.array('images', 6), async (req, res, next) => {

    const {
        title,
        id,
        category,
        description,
        price
    } = req.body;


    try {

        const newAd = new AdSchema({
            title: title,
            _id: id,
            category: category,
            description: description,
            price: price,
        })

        await newAd.save()
    }
    catch (err) {
        next(err)
    }
});

module.exports = router;