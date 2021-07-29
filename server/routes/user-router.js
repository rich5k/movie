const express = require('express');

const userCtrl = require('../controllers/user-ctrl');

const router = express.Router();

router.post('/user',userCtrl.createUser);
router.put('/user/:id', userCtrl.updateUser);
router.delete('/user/:id',userCtrl.deleteUser);
router.get('/user/:id', userCtrl.getUserById);
router.get('/users', userCtrl.getUsers);

module.exports = router;