const express = require('express')
const router = express.Router(); 
const productSchema = require('../Schema/ProductSchema')

router.post('/addProduct', async (req, res)=>{
    try {
        // 1️⃣ ক্লায়েন্ট থেকে পাঠানো ডাটা
        const productData = req.body;
        console.log(productData)
    
        // 2️⃣ Mongoose Schema দিয়ে Validation
        const newProduct = new productSchema(productData);
        console.log(newProduct)
    
        // 3️⃣ MongoDB তে Save করা
        await newProduct.save();
    
        res
        .send(newProduct)
        
      } catch (error) {
        res.status(400).json({ message: "Validation failed", error: error.message });
      }
})

module.exports = router