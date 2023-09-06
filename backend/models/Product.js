const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide the name of the product!'],
        maxLength: 50, 
        minLength: 3
    }, 
    description:{
        type: String,
        maxLength: 300,
        default:""
    },
    category: {
        type: String,
        enum: ['Car', 'Electronics', 'Clothing', 'Beauty', 'Machinery', 'Book', 'Art', 'Jewelry', 'Other'],
        default: 'Other'
    },
    price :{
        type: Number,
        required:[true, "Please provice the price of the product!"]
    },
    location:{
        type: String,
        enum: ['Addis Ababa', 'Adama', 'Hawassa', 'Jimma', 'Gonder', 'Bahir Dar', 'Mekele'],
        required: [true, 'Please provide the location of the seller!']
    },
    delivery_available:{
        type: Boolean,
        default: false
    },
    status:{
        type: String,
        enum: ['Sold', 'On_Sale'],
        default: 'On_Sale'
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
         required: [true, "Please provive the user"]
    }
}, {timestamps: true})

module.exports = mongoose.model("Product", productSchema)