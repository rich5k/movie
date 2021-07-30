const MovieRating = require('../models/movieRatings-model');

const createMovieRating = (req,res)=>{
    const body = req.body;

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie rating',
        })
    }

    const movieRating = new MovieRating(body);

    if (!movieRating){
        return res.status(400).json({success: false, error: err});
    }

    movieRating
        .save()
        .then(()=>{
            return res.status(201).json({
                success: true,
                id: movieRating._id,
                message: 'Movie rating created!',
            })
        })
        .catch(error=>{
            return res.status(400).json({
                error,
                message: 'Movie rating not created'
            })
        })
}

const updateMovieRating = async(req, res)=>{
    const body = req.body;

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    MovieRating.findOne({_id: req.params.id}, (err, movieRating)=>{

        if (err){
            return res.status(404).json({
                err,
                message: 'Movie rating not found!',
            })
        }
        movieRating.id = body.id;
        movieRating.rating= body.rating;
        movieRating.review = body.review;
        

        movieRating
            .save()
            .then(()=>{
                return res.status(200).json({
                    success: true,
                    id: movieRating._id,
                    message: 'Movie rating updated!',
                })
            })
            .catch(error=>{
                return res.status(404).json({
                    error,
                    message: 'Movie rating not updated!',
                })
            })

    })
}

const deleteMovieRating = async(req, res) => {
    await MovieRating.findOneAndDelete({_id: req.params.id}, (err, movieRating)=>{
        if(err){
            return res.status(400).json({success: false, error: err})
        }

        if (!movieRating){
            return res
                .status(404)
                .json({success: false, error: 'Movie rating not found'})
        }

        return res.status(200).json({success: true, data: movieRating})
    }).catch(err => console.log(err))
}

const getMovieRatingById = async (req, res)=>{
    await MovieRating.findOne({_id: req.params.id}, (err,movieRating)=>{
        if(err){
            return res.status(400).json({success: false, error: err})
        }

        if (!movieRating){
            return res
                .status(404)
                .json({success: false, error: 'Movie rating not found'})
        }
        return res.status(200).json({success: true, data: movieRating})
    }).catch(err=> console.log(err))
}

const getMovieRatings = async (req, res)=>{
    await MovieRating.find({}, (err, movieRatings)=>{
        if(err){
            return res.status(400).json({success:false, error: err})
        }
        if(!movieRatings.length){
            return res
                .status(404)
                .json({success: false, error: 'Movie rating not found'})
        }
        return res.status(200).json({success: true, data: movieRatings})
    }).catch(err=> console.log(err))
}

module.exports ={
    createMovieRating,
    updateMovieRating,
    deleteMovieRating,
    getMovieRatings,
    getMovieRatingById,
}