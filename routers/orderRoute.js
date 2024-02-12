const express = require('express');
const router = express.Router();
const {createOrder, getOrder, getOrderById} = require ('../controllers/ordersController')

router.post('/',createOrder);
router.get('/',getOrder);
router.get('/:id',getOrderById);

module.exports = router;
