const express = require('express');
const router = express.Router();
const {createProduct, getProduct, getProductById} = require('../controllers/productController');
const upload = require('../middlewares/multer');
const {Authorization} = require('../middlewares/authorizing')


router.post('/', upload.single("image"), createProduct)
router.get('/', getProduct)
router.get('/:id', getProductById)


module.exports = router;


// Authorization,