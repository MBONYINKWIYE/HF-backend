const Vendor = require('../models/vendor');


const createVendor = async (req, res) => {
    try {
        const vendor = await Vendor.findOne({ email: req.body.email});
        if(vendor){
            res.status(400).json({
                message: 'Vendor already exists'
            })
        }
       
        const newVendor = await Vendor.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            role: req.body.role,
            deliver: req.body.deliver
        });
        res.status(200).json({
            status: 'success',
            newVendor
        })
    } catch(err){
        res.status(400).json({
            status: 'failed',
            message: err.message
        })
    }
}

const getVendorById = async (req, res) => {
    try{
        const vendor = await Vendor.findById(req.params.id);
        res.status(200).json({
            status:'success',
            vendor
        })
    } catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}

const updateVendor = async (req, res) => {
    try{
        const vendor = await Vendor.findById({ _id: req.params.id})
        if(!vendor){
            res.status(404).json({
                status: 'failed',
                message: 'vendor not found'
            });
        }
        const newVendor = await Vendor.findByIdAndUpdate( req.params.id, {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            deliver: req.body.deliver
        });
        res.status(200).json({
            message:'vendor updated successfully',
            newVendor
        })
    } catch(err){
        res.status(400).json({
            status: 'failed',
            message: err.message
        })
    }
}

const deleteVendor = async (req, res) => {
    try{
        const vendor = await Vendor.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:'success',
            message: 'vendor deleted successfully'
        })
    } catch(err){
        res.status(400).json({
            status: 'failed',
            message: err.message
        })
    }
}

const getAllVendors = async (req, res) => {
    try{
        const vendors = await Vendor.find()
        res.status(200).json({
            mesage: 'success',
            vendors
        })
    } catch(err){
        res.status(400).json({
            status: 'not reached',
            message: err.message
        })
    }
}

module.exports = {createVendor, getAllVendors,getVendorById,deleteVendor,updateVendor};