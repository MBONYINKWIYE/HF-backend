const Orders = require('../models/orders');
const Product = require('../models/product');


const createOrder = async(req,res)=>{

    try {
        const order = await Orders.create({
            orderItems: req.body.items,
            address: req.body.address,
            phone: req.body.phone,
        });

        res.status(200).json({
            status:"success",
            message:"Order added Successfully",
            order
        })

    } catch (err) {
        res.status(400).json({message:err.message})
    }
}

const getOrder = async (req, res) =>{
    try{
        const order = await Orders.find();
        res.status(200).json(order)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

const getOrderById = async (req, res) => {
    try{
        const order = await Orders.findById(req.params.id);
        res.status(200).json({
            status:'success',
            order
        })
    } catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}


module.exports = {createOrder, getOrder,getOrderById}
