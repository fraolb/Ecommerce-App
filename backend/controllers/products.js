const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const getAllProduct = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products, count: products.legth });
};

const getSingleProduct = async (req, res) => {
  const { name } = req.body;
  const product = await Product.find({ name });
  if (!product) {
    throw new NotFoundError("No product found with this name");
  }
};

///authrized person only
const getMyProducts = async (req, res) => {
  const products = await Product.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ products, count: products.length });
};

const createProduct = async (req, res) => {
  const imagePath = req.file.path;
  // console.log("the image path is ", imagePath);
  // console.log("the req body is ", req.body);

  const result = await cloudinary.uploader.upload(imagePath, {
    use_filename: true,
    folder: "file-upload",
  });

  // Remove the local image file
  fs.unlinkSync(imagePath);

  // console.log('the upload image result is ', result);

  // Remove the 'image' field from req.body
  delete req.body.image;

  // Add the Cloudinary URL to req.body
  req.body.image = {
    public_id: result.public_id,
    url: result.secure_url,
  }; // Assuming 'secure_url' contains the Cloudinary URL

  req.body.createdBy = req.user.userId;
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json(product);
};

const deleteProduct = async (req, res) => {
  const {
    user: { userId },
    params: { id: productId },
  } = req;
  const product = await Product.findOne({
    _id: productId,
    createdBy: userId,
  });

  if (!product) {
    throw new NotFoundError(`No product found with id ${productId}`);
  }

  // Remove the image from Cloudinary
  if (product.image.public_id) {
  
    // Delete the image from Cloudinary
    const destroy = await cloudinary.uploader.destroy(product.image.public_id);
    console.log("the destroyed image result is ", destroy);
  }

  // Delete the product from MongoDB
  const removeProduct = await Product.findOneAndRemove({
    _id: productId,
    createdBy: userId,
  });

  res.status(StatusCodes.OK).send("Deleted Successfully!");
};

module.exports = {
  getAllProduct,
  getSingleProduct,
  createProduct,
  getMyProducts,
  deleteProduct,
};
