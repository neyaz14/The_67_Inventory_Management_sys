const express = require('express')
const router = express.Router();
const productSchema = require('../Schema/ProductSchema')
const verifyJWT = require('../Middleware/jwtMiddleware')
router.post('/addProduct', async (req, res) => {
  try {
    //  recieving data from the client 
    const productData = req.body;
    // console.log(productData)

    //  Mongoose Schema  Validation
    const newProduct = new productSchema(productData);
    // console.log(newProduct)

    //  inseting in the db
    await newProduct.save();

    res
      .send(newProduct)

  } catch (error) {
    res.status(400).json({ message: "Validation failed", error: error.message });
  }
})

router.get('/allProducts', async (req, res) => {
  try {
    const allproducts = await productSchema.find();
    console.log(allproducts.length)
    res.send(allproducts)
  } catch (err) {
    console.log(err)
  }


})

router.get("/allProducts/:id", async (req, res) => {
  try {
      const { id } = req.params; // Extract ID from URL
      const product = await productSchema.findById(id); // Find product by ID

      if (!product) {
          return res.status(404).json({ message: "Product not found" });
      }

      res.json(product);
  } catch (error) {
      res.status(500).json({ message: "Error fetching product", error });
  }
});

router.delete("/allProducts/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const deletedProduct = await productSchema.findByIdAndDelete(id);

      if (!deletedProduct) {
          return res.status(404).json({ message: "Product not found" });
      }

      res.json({ message: "Product deleted successfully", deletedProduct });
  } catch (error) {
      res.status(500).json({ message: "Error deleting product", error });
  }
});

module.exports = router