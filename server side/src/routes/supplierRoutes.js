const express = require('express')
const router = express.Router();
const supplierSchema = require('../Schema/SupplierSchema')


router.get('/allSupplierInfo', async (req, res) => {
    const supplierDetails = await supplierSchema.find();
    res.send(supplierDetails)
})

router.post('/addSupplier', async (req, res) => {
    try {

        const supplierInfo = req.body;
        const newSupplier = new supplierSchema(supplierInfo);
        console.log('new supplier from schema', newSupplier)
        const result = await newSupplier.save();
        res.send(result);

    } catch (err) {
        console.log(err);
    }

})

// send suggestions for the better ui experience 
router.get("/suggestionsSupplier", async(req,res)=>{
    try {
        const suppliers = await supplierSchema.find({}, 'name email _id');
        res.json(suppliers);
      } catch (err) {
        console.error('Error fetching suppliers:', err);
        res.json({ message: "Error fetching suppliers" });
      }
})

module.exports = router
