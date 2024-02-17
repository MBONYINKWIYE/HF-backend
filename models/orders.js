const mongoose = require('mongoose');
const { getUserById } = require('../controllers/userController');

const ordersSchema = mongoose.Schema({
    orderItems: [
        {
            item: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Product"
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    isDelivered:{
        type:Boolean,
        default:false
    },
    totalPrice:{
        type:Number,
        default:1
    },
    dateCreated:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        enum:['Pending','Delivered'],
        default:'Pending'
    }

})

const Orders = mongoose.model('Orders', ordersSchema);
module.exports = Orders;