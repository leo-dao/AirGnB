const express = require('express');
const port = process.env.PORT || 4000;
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
app.use(cors());
const bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
const errorHandler = require('./middleware/error');

dotenv.config();
mongoose.connect(process.env.MONGO_URL);

// ROUTE IMPORTS
const registerRoute = require('./routes/register');
const postAdRoute = require('./routes/postAd');
const signInRoute = require('./routes/signIn')

app.use('/register', registerRoute);
app.use('/postAd', postAdRoute);
app.use('/signIn', signInRoute);

app.use(errorHandler);

app.listen(port, () => {
    console.log('Server is running on port ' + port);
}
);

process.on('unhandledRejection', (err, promise) => {
    console.log('Encountered error: ' + err);
})