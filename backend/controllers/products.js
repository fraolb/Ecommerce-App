const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const cloudinary = require('cloudinary').v2;
const fs = require('fs');


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


///authrized person only
const getMyProducts = async(req, res)=>{
  const products = await Product.find({createdBy: req.user.userId})
  res.status(StatusCodes.OK).json({products, count: products.length})
}
const createProduct = async (req, res)=>{
  // console.log("create product ")
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: 'file-upload',
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);

  console.log('the upload image result is ', result)
  
  req.body.createdBy = req.user.userId;
  const product = await Product.create(req.body)
  res.status(StatusCodes.CREATED).json(product)
}
const deleteProduct = async (req, res)=>{
  const {
    user: {userId},
    params: {id:productId}
  } = req
  const product = await Product.findOneAndRemove({
    _id: productId,
    createdBy: userId
  })
  if(!product){
    throw new NotFoundError(`No product found with id ${productId}`)
  }
  res.status(StatusCodes.OK).send("Deleted Successfully!")
}

module.exports = { getAllProduct, getSingleProduct, createProduct, getMyProducts, deleteProduct };
