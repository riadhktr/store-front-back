const express = require('express');
const { AddProduct, GetProducts, deleteProduct, UpdateArticle } = require('../controllers/Controllers');

const ProductRouter = express.Router();

ProductRouter.post('/add',AddProduct);
ProductRouter.get('/list',GetProducts);
ProductRouter.delete('/remove/:id',deleteProduct)
ProductRouter.put('/update/:id', UpdateArticle)


module.exports = ProductRouter;