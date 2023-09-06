const express = require("express");
const router = express.Router();

///multer for the images
const Upload = require('../multer')

const {  getMyProducts, createProduct, deleteProduct } = require("../controllers/products");


// router.route('/').get(getMyProducts).post(createProduct)
router.get('/', getMyProducts)
router.post('/', Upload.single('image'), createProduct)
router.route('/:id').delete(deleteProduct)

module.exports = router