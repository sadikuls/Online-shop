const express = require('express');
const router = express.Router();

router.get('/',function (req,res,next) {
    res.status(200).send({
        message:"all is well ! get request"
    });
});

router.post('/',function (req,res,next) {
    res.status(200).send({
        message:"all is well ! post request"
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