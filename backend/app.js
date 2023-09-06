require('dotenv').config()
require('express-async-errors')
const express = require('express')
const connectDB = require('./db/connect')


///cloudinary
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
  });

///error handlers
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


///auth
const authenticateUser = require('./middleware/authentication')
///import routes
const AuthRouter = require('./routes/auth')
const Products = require('./routes/products')
const AuthProducts = require('./routes/auth_products')

const app = express()
app.use(express.json())

app.use('/api/v1/auth', AuthRouter)
app.use('/api/v1/products', Products)
app.use('/api/v1/auth/products', authenticateUser, AuthProducts)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.get('/api/v1', (req,res)=>{
    res.send("home page")
})

port = process.env.PORT || 4000

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log(`server is listening on port ${port}`)
        })
    }
    catch(error){
        console.log(error)
    }
}

start()