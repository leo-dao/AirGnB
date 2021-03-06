const express = require('express');
const port = 4000;
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bp = require('body-parser');
const errorHandler = require('./middleware/error');

// ROUTE IMPORTS
const registerRoute = require('./routes/register');
const postAdRoute = require('./routes/postAd');
const signInRoute = require('./routes/signIn');
const getAdsRoute = require('./routes/getAds');
const getUsersRoute = require('./routes/getUsers');
const checkUserRoute = require('./routes/checkUser')
const getImagesRoute = require('./routes/getImages');
const bookAdRoute = require('./routes/bookAd');

// Connecting to mongoDB
dotenv.config();
mongoose.connect(process.env.MONGO_URL);

// Middleware
app.use(cors());
app.use(express.json());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use('/register', registerRoute);
app.use('/postAd', postAdRoute);
app.use('/signIn', signInRoute);
app.use('/getAds', getAdsRoute);
app.use('/getUsers', getUsersRoute)
app.use('/checkUser', checkUserRoute);
app.use('/getImages', getImagesRoute);
app.use('/bookAd', bookAdRoute);

app.use(errorHandler);

app.listen(port, () => {
    console.log('Server is running on port ' + port);
}
);

process.on('unhandledRejection', (err, promise) => {
    console.log('Encountered error: ' + err);
})