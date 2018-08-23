const express = require('express');
const bodyParser = require('body-parser');
const Controller = require('./Controller');


const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/users/registration', Controller.userRegistrationHandler);
app.post('/users/auth', Controller.userAuthHandler);


app.listen(6000, () => console.log('Example app listening on port 6000!'))