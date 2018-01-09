const express = require('express');
const router = express.Router();

router.get('/',function (req,res,next) {
    res.status(200).send({
        message:"orders fetch"
    });
});

router.post('/',function (req,res,next) {
    res.status(200).send({
        message:"order created"
    }).catch(next);
});

router.patch('/:orderId',function (req,res,next) {
    const id = req.params.orderId;
    if(id == 'sadikul'){
        res.status(200).json({
            message :"updated the order",
            id : id
        });
    }else{

        res.status(200).json({
            message :"you missed  a boss",
            id : id
        });
    }
});



router.delete('/:orderId',function (req,res,next) {

        res.status(200).json({
            message :"delete order",
            id : id
        });
});

module.exports = router;