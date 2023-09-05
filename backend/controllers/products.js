const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllProduct = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products, count: products.legth });
};

const getSingleProduct = async (req, res)=>{
    const {name} = req.body
    const product = await Product.find({name})
    if(!product){
        throw new NotFoundError("No product found with this name")
    }
}

module.exports = { getAllProduct, getSingleProduct };
