const express = require('express');
const router = express.Router();
const multer = require('multer');
const AdSchema = require('../models/Ad');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './uploads/'),
    filename: (req, file, cb) => cb(null, new Date().toISOString() + file.originalname)
})

const upload = multer({ storage, limits: { fileSize: (1024 ** 2) * 5 } });


router.post('/', upload.array('images', 3), (req, res) => {

    console.log(req.files);

    // req.body.images is a string?? it's '[object FileList]'
    // req.files is an empty array

    const newAd = new AdSchema({
        title: req.body.title,
        _id: req.body.id,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
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