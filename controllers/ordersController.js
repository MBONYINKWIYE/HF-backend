const Orders = require('../models/orders');


const createOrder = async(req,res)=>{

    try {
        const order = await Orders.create({
            orderItems: req.body.orderItems,
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

const updateOrder = async (req, res) => {
    try{
        const order = await Order.findById({ _id: req.params.id});
        if(!order){
            res.status(404).json({
                status: 'failed',
                message: 'Order not found'
            });
        }
        const newOrder = await Order.findByIdAndUpdate( req.params.id, {
            orderItems: req.body.orderItems,
            address: req.body.address,
            phone: req.body.phone,
        });
        res.status(200).json({
            message:'Order updated successfully',
            newOrder
        })
    } catch(err){
        res.status(400).json({
            status: 'failed',
            message: err.message
        })
    }
}

const deleteOrder = async (req, res) => {k
    try{
        const order = await Orders.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:'success',
            message: 'User deleted successfully'
        })
    } catch(err){
        res.status(400).json({
            status: 'failed',
            message: err.message
        })
    }
}

module.exports = {createOrder, getOrder,updateOrder, getOrderById, deleteOrder}
