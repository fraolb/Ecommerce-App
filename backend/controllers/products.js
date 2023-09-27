const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const getAllProduct = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products, count: products.legth });
};

const getFilteredProduct = async (req, res) => {
  const { category, sex, size, name, sort, numericFilters } = req.query;

  const queryObject = {};
  if (category) {
    queryObject.category = category;
  }
  if (sex) {
    queryObject.sex = sex;
  }
  if (size) {
    queryObject.size = size;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "si" };
  }

  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    const options = ['price', 'rating'];
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }



  let result = Product.find(queryObject);
    // sort
    if (sort) {
      const sortList = sort.split(',').join(' ');
      result = result.sort(sortList);
    } else {
      result = result.sort('createdAt');
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 30;
    const skip = (page - 1) * limit;
  
    result = result.skip(skip).limit(limit);

    const products = await result;
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
  const imagePaths = req.files.map((file) => file.path);

  // Upload all images to Cloudinary
  const uploadPromises = imagePaths.map((imagePath) =>
    cloudinary.uploader.upload(imagePath, {
      use_filename: true,
      folder: "file-upload",
    })
  );

  const uploadedResults = await Promise.all(uploadPromises);

  // Remove the local image files
  imagePaths.forEach((imagePath) => fs.unlinkSync(imagePath));

  // Map Cloudinary results to an array of image objects
  const images = uploadedResults.map((result) => ({
    public_id: result.public_id,
    url: result.secure_url,
  }));

  // Add the array of image objects to req.body
  req.body.images = images;

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

  // Delete all images from Cloudinary
  if (product.images && product.images.length > 0) {
    const destroyPromises = product.images.map((image) =>
      cloudinary.uploader.destroy(image.public_id)
    );

    const destroyResults = await Promise.all(destroyPromises);
    console.log("the destroyed image results are ", destroyResults);
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
  getFilteredProduct,
  getSingleProduct,
  createProduct,
  getMyProducts,
  deleteProduct,
};
