const mongoose =require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxtength: 50
    },

    age: {
        type: Number,
        required: true
    },
    weight:{
        type: Number
    },

    createdAt:{
        type:Date,
        default: Date.now
    }
})

module.exports = userSchema;
