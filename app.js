const express = require('express');

const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
//a midleware that handle all kind of request in productroute
app.use('/products',productRoutes);
//a midleware that handle all kind of request in productroute
app.use('/ordersItem',orderRoutes);

//error handling
app.use(function(err ,req,res,next) {
    res.status(500);
    res.send({
        error:{
            message : err.message
        }
    });
})


module.exports = app;