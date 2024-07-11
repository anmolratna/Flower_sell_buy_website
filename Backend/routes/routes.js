const express = require('express');
const router = express.Router();
const Allproduct = require('../models/appproduct.js');

/*
//Get Api
router.get('/product', async (req, res) => {
    try {
      const products = await Allproduct.find();
      res.send(products);
    } catch (err) {
      console.log('Error in Get API:', err);
      res.status(500).send('Error in Get API');
    }
  });

// POST API
router.post('/', async (req, res) => {
  try {
    let product = new Allproduct({
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
      review: req.body.review,
      category: req.body.category,
    });

    
    if (!product.name || !product.image || !product.price || !product.review || !product.category) {
      return res.status(400).send('All fields are required.');
    }

    const savedProduct = await product.save();
    res.status(201).send(savedProduct); // HTTP 201 for successful creation
  } catch (err) {
    console.error('Error in Post Data:', err);
    res.status(500).send('Internal Server Error');
  }
});
router.get("/:id",async (req,res)=>{
  let {id} = req.params;
  const item= await Allproduct.findById(id);
  res.send(item);

})

//Delete API
router.delete("/:id",async(req,res)=>{
  let {id} = req.params;
  const item = await Allproduct.findByIdAndDelete(id);
  res.send("Deleted");
})

//Update API
router.put("/:id",async (req,res)=>{
  try{
    let {id} = req.params;
    const { name, image, price, review, category } = req.body;
    // Find the product by ID and update it
    const updated_product = await Allproduct.findByIdAndUpdate(id,{ name, image, price, review, category },
      { new: true } // To return the updated document)
    );
    if (!updated_product) {
      return res.status(404).send('Product not found');
    }

    res.status(200).send(updated_product);
  } catch (err) {
    console.error('Error in PUT Data:', err);
    res.status(500).send('Error in PUT Data');
  };
});
module.exports = router;
*/