const express = require('express');
const app = express();
const bp = require('body-parser');

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.post('/register', (req, res) => {
    // print the form data
    console.log(req.body);
}
);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
}
);