"use strict";
const mongoose = require('mongoose'),
    app = require('./app'),
    config = require('./config');

mongoose.connect(config.db, (err, res)=>{
    if(err) {if (err) res.status(500).send({message: `An error has occurred deleting a product: ${err}`});
        return console.log(`An error has occurred connecting to the database: ${err}`);
    }
    console.log('The connection to the database was successfully established.');

    app.listen(config.port, () => {
        console.log(`Server is running on port: ${config.port}.`)
    });
});

