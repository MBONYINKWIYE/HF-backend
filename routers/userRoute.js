const express = require('express');
const router = express.Router();

const { createUser, getAllUsers, getUserById, deleteUser, updateUser, authUser } = require('../controllers/userController');

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/login', authUser);

module.exports = router;