const User = require('../models/user-model');
const bcrypt = require('bcryptjs');
const path = require('path')
require ('dotenv').config();
// const createUser = (req,res)=>{
//     const body = req.body;

//     if(!body){
//         return res.status(400).json({
//             success: false,
//             error: 'You must provide a user',
//         })
//     }

//     const user = new User(body);

//     if (!user){
//         return res.status(400).json({success: false, error: err});
//     }

//     user
//         .save()
//         .then(()=>{
//             return res.status(201).json({
//                 success: true,
//                 id: user._id,
//                 message: 'User created!',
//             })
//         })
//         .catch(error=>{
//             return res.status(400).json({
//                 error,
//                 message: 'User not created'
//             })
//         })
// }

// const createUser = async(req, res, next)=> {
//     const obj = {
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//         picture: {
//             data: fs.readFileSync(path.join(__dirname + '/../profile-pics/' + req.file.filename)),
//             contentType: 'image/jpeg'
//         }
//     }
//     User.create(obj, (err, item)=>{
//         if(err){
//             return res.status(400).json({
//                 err,
//                 message: 'User not created'
//             })
//         }
//         else{
//             return res.status(201).json({
//                 success: true,
//                 message: 'User created!',
//             })
//         }
//     })
// }

const createUser = async(req, res)=> {
    console.log('new user was sent to the backend')
    console.log(req.file);
    
    console.log('Image name:'+req.file.filename);
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    const obj = {
        name: req.body.name,
        email: req.body.email,
        password: hash,
        image: req.file.filename
    }
    User.create(obj, (err, item)=>{
        if(err){
            return res.status(400).json({
                err,
                message: 'User not created'
            })
        }
        else{
            return res.status(201).json({
                success: true,
                message: 'User created!',
            })
        }
    })
}


const updateUser = async(req, res)=>{
    const body = req.body;

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    User.findOne({_id: req.params.id}, (err, user)=>{

        if (err){
            return res.status(404).json({
                err,
                message: 'User not found!',
            })
        }
        user.name = body.name;
        user.email= body.email;
        user.password = body.password;
        user.picture = body.picture;

        user
            .save()
            .then(()=>{
                return res.status(200).json({
                    success: true,
                    id: user._id,
                    message: 'User updated!',
                })
            })
            .catch(error=>{
                return res.status(404).json({
                    error,
                    message: 'User not updated!',
                })
            })

    })
}

const deleteUser = async(req, res) => {
    await User.findOneAndDelete({_id: req.params.id}, (err, user)=>{
        if(err){
            return res.status(400).json({success: false, error: err})
        }

        if (!user){
            return res
                .status(404)
                .json({success: false, error: 'User not found'})
        }

        return res.status(200).json({success: true, data: user})
    }).catch(err => console.log(err))
}

const getUserById = async (req, res)=>{
    await User.findOne({_id: req.params.id}, (err,user)=>{
        if(err){
            return res.status(400).json({success: false, error: err})
        }

        if (!user){
            return res
                .status(404)
                .json({success: false, error: 'User not found'})
        }
        return res.status(200).json({success: true, data: user})
    }).catch(err=> console.log(err))
}

const getUsers = async (req, res)=>{
    await User.find({}, (err, users)=>{
        if(err){
            return res.status(400).json({success:false, error: err})
        }
        if(!users.length){
            return res
                .status(404)
                .json({success: false, error: 'User not found'})
        }
        return res.status(200).json({success: true, data: users})
    }).catch(err=> console.log(err))
}

module.exports ={
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    getUserById,
}