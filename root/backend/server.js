const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const bp = require('body-parser');
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))


const registerRoute = require('./routes/register');

app.use('/register', registerRoute);

app.listen(port, () => {
    console.log('Server is running on port ${port}');
}
);