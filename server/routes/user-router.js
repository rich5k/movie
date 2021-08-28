const express = require('express');

const userCtrl = require('../controllers/user-ctrl');

const router = express.Router();
const multer= require('multer');
const storage = multer.diskStorage({
    destination : (req, file, cb)=> {
        cb(null, '../public/profile-pics')
    },
    filename: (req,file,cb)=>{
        cb(null, file.originalname)
    }
});
const upload1=multer();
const upload = multer({storage: storage});
router.post('/user',upload.single('image'),userCtrl.createUser);
router.put('/user/:id', userCtrl.updateUser);
router.delete('/user/:id',userCtrl.deleteUser);
router.get('/user/:id', userCtrl.getUserById);
router.post('/user/email', upload1.none(),  userCtrl.getUserByEmail);
router.get('/users', userCtrl.getUsers);

module.exports = router;