const express = require('express');

const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
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