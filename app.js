const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

/*mongoose.connect(
    "mongodb://online-shop:"+
    process.env.MONGO_ATLAS_PW +
    "@online-shop-shard-00-00-cj5lm.mongodb.net:27017,online-shop-shard-00-01-cj5lm.mongodb.net:27017,online-shop-shard-00-02-cj5lm.mongodb.net:27017/admin?replicaSet=Online-Shop-shard-0&ssl=true"
);*/
app.use(function(req,res,next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Header',
        'Origin,X-Requested-With,Content-Type,Accept,Authorization');

    if(req.method == 'OPTIONS'){
        res.header('Access-Control-Allow-Methods',
            'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//a midleware that handle all kind of request in productroute
app.use('/products',productRoutes);
//a midleware that handle all kind of request in productroute
app.use('/orders',orderRoutes);

//error handling
app.use(function(req,res,next) {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})
app.use(function(error,req,res,next) {
    res.status(error.status || 500).send({
       status :"error",
        message : {
           msg : "adress not found"
        }
    });
})


module.exports = app;