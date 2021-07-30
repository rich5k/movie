const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const multer = require('multer');

const db = require('./db');
const movieRouter = require('./routes/movie-router');
const movieRatingRouter = require('./routes/movieRating-router');
const userRouter = require('./routes/user-router');

const app= express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.use(multer({dest: './uploads/',
rename: function(fieldname, filename){
    return filename;
},
}));

app.use('/api',movieRouter);
app.use('/api',movieRatingRouter);
app.use('/api',userRouter);

app.listen(apiPort, ()=>console.log(`Server running on port ${apiPort}`));