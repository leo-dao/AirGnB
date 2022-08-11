const express = require('express');
const router = express.Router();
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

router.post("/", async (req, res, next) => {

    const { email, password } = req.body;

    try {
        // Finding user
        const user = req.body;
        console.log(user);


        await User.deleteOne({ _id: user._id });

        res.status(202).json({ success: true })

    } catch (err) {
        next(err)
    };
});

module.exports = router;