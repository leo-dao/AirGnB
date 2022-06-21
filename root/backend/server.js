const express = require('express');
const port = process.env.PORT || 4000;
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bp = require('body-parser');
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

dotenv.config()
mongoose.connect(process.env.MONGO_URL, () => console.log("Connected!"))

// ROUTE IMPORTS
const registerRoute = require('./routes/register');
const postAdRoute = require('./routes/postAd');

app.use('/register', registerRoute);
app.use('/postAd', postAdRoute);

app.listen(port, () => {
    console.log('Server is running on port ' + port);
}
);