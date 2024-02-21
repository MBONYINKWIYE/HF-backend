const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }

})

const Pay = mongoose.model('Pay', paymentSchema);
module.exports = Pay;