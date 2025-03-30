const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Supplier name is required'],
        trim: true
      },
      email: {
        type: String,
        required: [true, 'Email address is required'],
        unique: true,
        trim: true,
        
      },
      phoneNumber: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true
      },
      
    }, { timestamps: true });

module.exports = mongoose.model("SupplierDetails", supplierSchema)