const express = require('express');
const router = express.Router();
const { createVendor,getAllVendors,getVendorById,deleteVendor,updateVendor } = require('../controllers/vendorController');


router.post('/', createVendor);
router.get('/', getAllVendors);
router.get('/:id', getVendorById);
router.put('/:id', updateVendor);
router.delete('/:id', deleteVendor);

module.exports = router;
