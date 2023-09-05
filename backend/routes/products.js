const express = require("express");
const router = express.Router();

const { getAllProduct, getSingleProduct } = require("../controllers/products");


router.route('/').get(getAllProduct)
router.route('/:name').get(getSingleProduct)

module.exports = router