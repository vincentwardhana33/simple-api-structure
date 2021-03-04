const express = require('express');
const router = express.Router();

const crudService = require('./service/crud');

router.post('/product/add', crudService.addProduct);
router.get('/product/:product_id?', crudService.getProducts);
router.delete('/product/delete/:product_id?', crudService.delete);
router.patch('/product/edit/:product_id?', crudService.edit);

module.exports = router;