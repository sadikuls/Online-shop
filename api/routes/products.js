const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

router.get('/',function (req,res,next) {
    Product.find().exec().then(function (values) {
        if(values.length >0){
            res.status(200).send({
                status :"success",
                data : values
            });
        }else{
            res.status(200).send({
                status :"success",
                msg:"no product available"
            });
        }
    }).catch(function (reason) {
        res.status(500).json({
            status:"error",
            data : reason
        });
    });
});

router.post('/',function (req,res,next) {
    const product = new Product({
        _id:new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });

    console.log("original product "+product);
    product
        .save()
        .then(function (response) {
            console.log(product);
            res.status(200).json({
                message :"you are knocking a boss",
                id : response
            });
        }).catch(function (reason) {
            console.log("reason of clash "+reason)
         res.status(200).json({
             message :"error",
             id : response.message
         });
    });

});

router.get('/:productId',function (req,res,next) {
    const id = req.params.productId;
    Product.findById(id).exec()
        .then(function (value) {
                res.status(200).send({
                    status :"success",
                    data : value
                });
        }).catch(function (reason) {

        res.status(500).send({
            status :"error",
            data : reason
        });
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

    const id = req.params.productId;
    Product.remove({
        _id:id
    }).exec().then(function (value) {
        res.status(200).json({
            status :"success",
            msg:"successfully deleted data",
        });
    }).catch(function (reason) {
        res.status(500).json({
            status :"error",
            msg:"something went wrong",
        });
    });

});

module.exports = router;