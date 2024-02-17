const express = require('express');
const router = express.Router();
const {createOrder, getOrder, getOrderById, updateOrder, deleteOrder} = require ('../controllers/ordersController')

router.post('/',createOrder);
router.get('/',getOrder);
router.get('/:id',getOrderById);
router.put('/:id',updateOrder);
router.delete('/:id',deleteOrder);

module.exports = router;
