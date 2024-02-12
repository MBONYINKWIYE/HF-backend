const express = require('express');
const router = express.Router();
const {createProduct, getProduct, getProductById} = require('../controllers/productController');
const {upload} = require('../middlewares/multer');


router.post('/', createProduct)
router.get('/', getProduct)
router.get('/:id', getProductById)


module.exports = router;


// upload.single("image")