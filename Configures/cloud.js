const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.cloud_key,
    api_secret: process.env.cloud_url
});

const uploadFile = async(file, res) =>{
    try{
        const result = await cloudinary.uploader.upload(file.path);
        return result
    }catch(err){
        return res.status(500).send(err)
    }
}

module.exports =  uploadFile
