const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

router.get('/',function (req,res,next) {
    res.status(200).send({
        message:req.body
    });
});

router.post('/',function (req,res,next) {
    res.status(200).send({
        message:req.body
    });
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product
        .save()
        .then(function (product) {
            console.log(product);
            res.status(200).json({
                message :"you are knocking a boss",
                id : product
            });
        }).catch(function (reason) {
            console.log("reason of clash "+reason)
    });

});

router.patch('/:productId',function (req,res,next) {
    const id = req.params.productId;
    if(id == 'sadikul'){
        res.status(200).json({
            message :"you are knocking a boss",
            id : id
        });
    }else{

        res.status(200).json({
            message :"you missed  a boss",
            id : id
        });
    }
});



router.delete('/:productId',function (req,res,next) {

        res.status(200).json({
            message :"delete req",
            id : id
        });
});

module.exports = router;