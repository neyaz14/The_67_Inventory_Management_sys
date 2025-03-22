const { Schema, model } = require("mongoose");
const userSchema = require('../Schema/Schema')
const mongoose =require('mongoose');

const userModel = new mongoose.model('User', userSchema)

module.exports = {userModel};
