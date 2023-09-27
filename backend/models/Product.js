const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the name of the product!"],
      maxLength: 50,
      minLength: 3,
    },
    description: {
      type: String,
      maxLength: 300,
      default: "",
    },
    category: {
      type: String,
      enum: [
        "Bag",
        "Hat",
        "Belt",
        "Sunglass",
        "Jewelry",
        "Dress",
        "Suit",
        "Jacket",
        "Shirt",
        "Sweater",
        "Shoes",
        "Pant",
        "Other"
      ],
      default: "Other",
    },
    price: {
      type: Number,
      required: [true, "Please provice the price of the product!"],
    },
    location: {
      type: String,
      enum: [
        "Addis Ababa",
        "Adama",
        "Hawassa",
        "Jimma",
        "Gonder",
        "Bahir Dar",
        "Mekele",
      ],
      required: [true, "Please provide the location of the seller!"],
    },
    sex:{
      type: String,
      enum: ["Male", "Female", "Both"],
      default: "Both"
    },
    size:{
      type: String,
      enum: ["S","M", "L", "XL", "XXL"],
      required: [true, "Please specify the size!"]
    },
    delivery_available: {
      type: Boolean,
      default: false,
    },

    images: [
      {
        public_id: {
          type: String,
          required: [true, "Please provide the public_id of the image!"],
        },
        url: {
          type: String,
          required: [true, "Please provide the URL of the image!"],
        },
      },
    ],
    
    status: {
      type: String,
      enum: ["Sold", "On_Sale"],
      default: "On_Sale",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provive the user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
