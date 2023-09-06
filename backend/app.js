require('dotenv').config();
require('express-async-errors');
const express = require('express');
const connectDB = require('./db/connect');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cloudinary Configuration (if you're using it globally)
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

// Import middleware and routes
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const authenticateUser = require('./middleware/authentication');
const AuthRouter = require('./routes/auth');
const Products = require('./routes/products');
const AuthProducts = require('./routes/auth_products');

// Routes
app.use('/api/v1/auth', AuthRouter);
app.use('/api/v1/products', Products);

// Protect these routes with authentication
app.use('/api/v1/auth/products', authenticateUser, AuthProducts);


const fs = require('fs');

const uploadDir = 'Uploads';

// Check if the directory exists, and if not, create it
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
    console.log(`Created directory: ${uploadDir}`);
} else {
    console.log(`Directory already exists: ${uploadDir}`);
}
// Image upload route
const Upload = require('./multer');

app.use('/api/v1/img', Upload.array('image'), async (req, res) => {
    // Handle image upload logic here
    console.log('Image upload route hit');
    res.send('Uploaded successfully');
});

// Home page
app.get('/api/v1', (req, res) => {
    res.send('Home page');
});

// Error handling middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// Start the server
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.error(error);
    }
};

start();
