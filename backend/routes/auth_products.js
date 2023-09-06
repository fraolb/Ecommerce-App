const express = require("express");
const router = express.Router();

const {  getMyProducts, createProduct, deleteProduct } = require("../controllers/products");


router.route('/').get(getMyProducts).post(createProduct)
router.route('/:id').delete(deleteProduct)

module.exports = router