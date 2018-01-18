const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

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