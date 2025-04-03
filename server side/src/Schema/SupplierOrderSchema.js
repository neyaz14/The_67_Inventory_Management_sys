const mongoose = require("mongoose");

const supplierOrderSchema = new mongoose.Schema({
    sku: { type: String, required: true, unique: true },
    stock: { type: Number, required: true },
    supplierId: { type: mongoose.Schema.Types.ObjectId, ref: "SupplierDetails", required: true },
    supplierEmail: { type: String, required: true }, // <- added this
    costPrice: { type: Number, required: true },
    batchNumber: { type: String },
    expiryDate: { type: Date }, // if you want expiry too
}, { timestamps: true });

module.exports = mongoose.model("SupplierOrder", supplierOrderSchema);
