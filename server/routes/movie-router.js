const express = require('express');

const MovieCtrl = require('../controllers/movie-ctrl');

const router = express.Router();
const multer= require('multer');
const storage = multer.diskStorage({
    destination : (req, file, cb)=> {
        cb(null, '../public/uploads')
    },
    filename: (req,file,cb)=>{
        // cb(null, Date.now() + '-'+ file.originalname)
        cb(null, file.originalname)
    }
});

const upload = multer({storage: storage});
router.post('/movie',upload.single('image'),MovieCtrl.createMovie);
// router.post('/movie', MovieCtrl.createMovie);
router.put('/movie/:id', MovieCtrl.updateMovie);
router.delete('/movie/:id',MovieCtrl.deleteMovie);
router.get('/movie/:id', MovieCtrl.getMovieById);
router.get('/movies', MovieCtrl.getMovies);

module.exports = router;