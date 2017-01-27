"use strict";
const express = require('express'),
    ProductCtrl = require('../controllers/product'),
    auth = require('../middlewares/auth'),
    api = express.Router();

api.get('/product', ProductCtrl.getProducts);
api.get('/product/:productId', ProductCtrl.getProduct);
api.post('/product', ProductCtrl.saveProduct);
api.put('/product/:productId', ProductCtrl.updateProduct);
api.delete('/product/:productId', ProductCtrl.deleteProduct);
api.get('/private', auth.isAuth ,function (req, res) {
    res.status(200).send({message: 'You have access :) '})
});

module.exports = api;
