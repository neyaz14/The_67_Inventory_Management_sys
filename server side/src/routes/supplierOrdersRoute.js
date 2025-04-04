const express = require('express')
const router = express.Router();
const SupplierOrderSchema = require('../Schema/SupplierOrderSchema')

router.get('/allSupplierOrders', async (req, res) => {
    try{
        const orders = await SupplierOrderSchema.find();
        res.send(orders)
    }catch(err){
        console.log(err)
    }
  
})
// router.get('/allSupplierOrders/:id', async (req, res) => {
//     try{
//         const orders = await SupplierOrderSchema.find();
//         res.send(orders)
//     }catch(err){
//         console.log(err)
//     }
  
// })

router.post('/addSupplierOrder', async (req, res) => {
    try {

        const OrderInfo = req.body;
        const newOrder = new SupplierOrderSchema(OrderInfo);
        // console.log('new order from schema', newOrder)
        const result = await newOrder.save();
        res.send(result);

    } catch (err) {
        console.log(err);
    }

})



router.put("/allSupplierOrders/:id", async (req, res) => {
    try {
      const updatedOrder = await SupplierOrderSchema.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
  
      if (!updatedOrder) {
        return res.status(404).json({ error: "Order not found" });
      }
  
      res.send(updatedOrder)
    } catch (err) {
      res.json({ error: err.message });
    }
  });





module.exports = router