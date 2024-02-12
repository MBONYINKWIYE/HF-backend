const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type:String,
    },
    price:{
        type:Number,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    productinfo:{
        type:String,
        required: true
    },
    image:{
        type:String,
        required: true
    },
    size:{
        type:String,
        enum:['select','small','large'],
        default:'select'
    },
    stock:{
        type:Number,
        required:true,
        default:1,
        min:0
    },
    dateCreated:{
        type:Date,
        default: Date.now
    }

})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;