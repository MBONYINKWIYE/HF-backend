const express = require('express');
const router = express.Router();
const {createProduct, getProduct, getProductById, deleteProduct, updateProduct} = require('../controllers/productController');
const upload = require('../middlewares/multer');
const Authorization = require('../middlewares/authorizing')


router.post('/',  upload.single("image"),createProduct)
router.get('/', getProduct)
router.get('/:id', getProductById)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)


module.exports = router;


//  Authorization,