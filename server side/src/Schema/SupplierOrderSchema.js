const mongoose = require("mongoose");

const supplierOrderSchema = new mongoose.Schema({
    sku: { type: String, required: true, unique: true },
    stock: { type: Number, required: true },
    supplierId: { type: mongoose.Schema.Types.ObjectId, ref: "SupplierDetails", required: true },
    costPrice: { type: Number, required: true },
    batchNumber: { type: String },
    expiryDate: { type: Date }, 
    // delivery date ? pending quantites ? 
    deliveredItem: {type:Number, default:0}
}, { timestamps: true });

module.exports = mongoose.model("SupplierOrder", supplierOrderSchema);
