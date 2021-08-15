require ('dotenv').config();
const Movie = require('../models/movie-model');
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})
// const fs = require('fs');
// const path = require('path')
// require('dotenv/config');
// const createMovie = (req,res)=>{
//     const body = req.body;

//     if(!body){
//         return res.status(400).json({
//             success: false,
//             error: 'You must provide a movie',
//         })
//     }

//     const movie = new Movie(body);

//     if (!movie){
//         return res.status(400).json({success: false, error: err});
//     }

//     movie.image.data = fs.readFileSync(req.files.userPhoto.path);
//     movie.image.contentType = 'image/jpeg';
//     movie
//         .save()
//         .then(()=>{
//             return res.status(201).json({
//                 success: true,
//                 id: movie._id,
//                 message: 'Movie created!',
//             })
//         })
//         .catch(error=>{
//             return res.status(400).json({
//                 error,
//                 message: 'Movie not created'
//             })
//         })
// }

// const createMovie = async(req, res, next)=> {
//     const obj = {
//         name: req.body.name,
//         desc: req.body.desc,
//         image: req.body.image
//     }
//     Movie.create(obj, (err, item)=>{
//         if(err){
//             return res.status(400).json({
//                 err,
//                 message: 'Movie not created'
//             })
//         }
//         else{
//             return res.status(201).json({
//                 success: true,
//                 message: 'Movie created!',
//             })
//         }
//     })
// }

const createMovie = async(req, res)=> {
    const values = Object.values(req.files);
    const promises = values.map(image =>cloudinary.uploader.uploader(image.path))

    Promise
        .all(promises)
        .then(results =>res.json(results))

    const obj = {
        name: req.body.name,
        desc: req.body.desc,
        image: req.body.image.path
    }
    Movie.create(obj, (err, item)=>{
        if(err){
            return res.status(400).json({
                err,
                message: 'Movie not created'
            })
        }
        else{
            return res.status(201).json({
                success: true,
                message: 'Movie created!',
            })
        }
    })
}

const updateMovie = async(req, res)=>{
    const body = req.body;

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Movie.findOne({_id: req.params.id}, (err,movie)=>{

        if (err){
            return res.status(404).json({
                err,
                message: 'Movie not found!',
            })
        }
        movie.name = body.name;
        movie.description= body.description;
        movie.image = body.image;
        

        movie
            .save()
            .then(()=>{
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'Movie updated!',
                })
            })
            .catch(error=>{
                return res.status(404).json({
                    error,
                    message: 'Movie not updated!',
                })
            })

    })
}

const deleteMovie = async(req, res) => {
    await Movie.findOneAndDelete({_id: req.params.id}, (err, movie)=>{
        if(err){
            return res.status(400).json({success: false, error: err})
        }

        if (!movie){
            return res
                .status(404)
                .json({success: false, error: 'Movie not found'})
        }

        return res.status(200).json({success: true, data: movie})
    }).catch(err => console.log(err))
}

const getMovieById = async (req, res)=>{
    await Movie.findOne({_id: req.params.id}, (err,movie)=>{
        if(err){
            return res.status(400).json({success: false, error: err})
        }

        if (!movie){
            return res
                .status(404)
                .json({success: false, error: 'Movie not found'})
        }
        return res.status(200).json({success: true, data: movie})
    }).catch(err=> console.log(err))
}

const getMovies = async (req, res)=>{
    await Movie.find({}, (err, movies)=>{
        if(err){
            return res.status(400).json({success:false, error: err})
        }
        if(!movies.length){
            return res
                .status(404)
                .json({success: false, error: 'Movie not found'})
        }
        return res.status(200).json({success: true, data: movies})
        // return res.status(200).render('moviesPage',{movies:movies});
    }).catch(err=> console.log(err))
}

module.exports ={
    createMovie,
    updateMovie,
    deleteMovie,
    getMovies,
    getMovieById,
}