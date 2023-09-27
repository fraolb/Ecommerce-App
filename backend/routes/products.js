const express = require("express");
const router = express.Router();

const { getAllProduct, getSingleProduct, getFilteredProduct } = require("../controllers/products");


router.route('/').get(getAllProduct)
router.route('/search').get(getFilteredProduct)
router.route('/:name').get(getSingleProduct)

module.exports = router