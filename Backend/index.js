const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes'); // Assuming routes are defined in a separate file
const Allproduct = require('./models/appproduct.js');
const app = express();
const ownerror_handler=require('./custom_error/own_error.js');
const mongoose = require('mongoose');
const SellerAddedProduct = require('./models/seller_add_product.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:4200' })); 


const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});
mongoose.connect('mongodb://127.0.0.1:27017/allproduct')
  .then(() => {
    console.log('Database Connection successful');
  })
  .catch((err) => {
    console.error('Error in connection:', err);
  });

// for home page 
app.get('/home', async (req, res, next) => {
  try {
    let allFlowers = await Allproduct.find({});
    res.send({ allFlowers });
  } catch (err) {
    next(err);
  }
});
//post api 
app.post('/seller', async (req, res, next) => {
  try {
    const productData = req.body; // Assuming the product data is sent in the request body

    // Create a new instance of the Allproduct model with the received data
    const newSellerProduct = await SellerAddedProduct.create(productData);
    // Create a new all product referencing the seller-added product
     const newAllProduct = await Allproduct.create({
        name: productData.name,
        image: productData.image,
        price: productData.price,
        category: productData.category,
        location: productData.location,
        description: productData.description,
        availability: productData.availability, 
        sellerAddedProduct: newSellerProduct._id, // Store the _id of the 
      });
    res.status(201).json(savedProduct); // Return the saved product as JSON response
  } catch (err) {
    next(err); // Pass the error to the error handling middleware
  }
 
});

// For delete the product
app.delete('/seller/:id', async (req, res, next) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await SellerAddedProduct.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    // Find and delete the all product referencing the seller-added product
    await Allproduct.findOneAndDelete({ sellerAddedProduct: productId });

    res.status(200).json({ success: true, message: 'Product deleted successfully' });
  } catch (err) {
    next(err); // Pass errors to the error handling middleware
  }
});

// Get api for seller 
app.get('/seller/selleraddedproduct', async(req,res,next)=>{
  try{
    const sellerAddedProducts = await SellerAddedProduct.find({});
    res.send({sellerAddedProducts});
  } catch(err){
    next(err);
  }

})
// error middleware 
app.use((err, req, res, next) => {
  let { status = 500, message = 'Internal Server Error' } = err;
  res.status(status).send(message);
});