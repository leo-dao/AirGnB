const express = require('express');
const router = express.Router();
const UserSchema = require('../models/User');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './uploads/'),
    filename: (req, file, cb) => cb(null, new Date().toISOString() + file.originalname)
})

const upload = multer({ storage, limits: { fileSize: (1024 ** 2) * 5 } });

router.post('/', upload.single('avatar'), (req, res) => {

    console.log(req.file);

    const newUser = new UserSchema({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
        avatar: req.file.path,
        _id: req.body.id,
    });
    newUser.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
        });
});

module.exports = router;