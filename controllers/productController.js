const Product = require('../models/product');
const uploadFile = require('../Configures/cloud')


const createProduct = async(req,res) =>{
    // const result = await uploadFile(req.file, res);
    try{
        const newProduct = await Product.create({
            name:req.body.name,
            price:req.body.price,
            description:req.body.description,
            productinfo:req.body.productinfo,
            image:req.body.image,
            size:req.body.size,
            stock:req.body.stock,
        });
        res.status(200).json({ status: 'success', message:'your post was created successfully', newProduct});
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

const getProduct = async (req, res) =>{
    try{
        const products = await Product.find();
        res.status(200).json(products)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

const getProductById = async (req, res) => {
    try{
        const products = await Product.findById(req.params.id);
        res.status(200).json({
            status:'success',
            products
        })
    } catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = {createProduct, getProduct, getProductById}