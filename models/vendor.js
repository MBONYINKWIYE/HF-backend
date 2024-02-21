const mongoose = require('mongoose');


const vendorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
    },
    role : {
        type: String,
        enum:['Supplier','Buyer','Select Role'],
        default:'Select Role',
        required: true
    },
    deliver:{
        type: String,
        enum:['Choose','Daily','Weekly','Monthly','Daily'],
        default:'Choose',
        required: true
    }
    
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;