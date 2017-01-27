"use strict";
const Product = require('../models/product');

function getProduct(req, res) {
    let productId = req.params.productId;

    Product.findById(productId, (err, product)=>{
        if (err) return res.status(500).send({message: `An error has occurred sending request: ${err}`});
        if(!product) return res.status(404).send({message: `The product not exist`});

        res.status(200).send({product})
    })
}
function getProducts(req, res) {
    Product.find({}, (err, products)=>{
        if (err) return res.status(500).send({message: `An error has occurred sending request: ${err}`});
        if(!products) return res.status(404).send({message: `The products not exist`});

        res.status(200).send({products})
    });
}
function saveProduct(req, res) {
    console.log('POST /api/product');
    console.log(req.body);

    let product = new Product();
    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;

    product.save((err, productStored)=>{
        if (err) res.status(500).send({message: `An error has occurred connecting to the database: ${err}`});
        res.status(200).send({product: productStored})
    })

}
function updateProduct(req, res) {
    let productId = req.params.productId;
    let update = req.body;

    Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
        if (err) res.status(500).send({message: `An error has occurred updating a product: ${err}`});

        res.status(200).send({ product: productUpdated })
    })
}
function deleteProduct(req, res) {
    let productId = req.params.productId;

    Product.findById(productId, (err, product)=>{


        product.remove(err =>{
            if (err) res.status(500).send({message: `An error has occurred deleting a product: ${err}`});
            res.status(200).send({message: `the product with id ${productId} has been deleted`})
        })
    })
}

module.exports = {
    getProduct,
    getProducts,
    updateProduct,
    saveProduct,
    deleteProduct
};