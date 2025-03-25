const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  sku: { type: String, required: true, unique: true },
  productName: { type: String, required: true },
  barcode: { type: String, required: true },
  stock: { type: Number, required: true },
  supplierId: { type: String, required: true },
  costPrice: { type: Number, required: true },
  competitorUrl: { type: String },
  mrpMin: { type: Number, required: true },
  mrpMax: { type: Number, required: true },
  batchNumber: { type: String },
  imageUrl: { type: String },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
