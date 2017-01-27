const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    api = require('./routes');

app.use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.json())
    .use('/api', api);



module.exports = app;