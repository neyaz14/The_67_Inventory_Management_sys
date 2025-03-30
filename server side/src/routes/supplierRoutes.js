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

module.exports = router