import React,{ useState} from 'react';
import './tailwindcss/styles.css';
import axios from 'axios';
import {API_URL} from './config';
import { useHistory} from "react-router-dom";
const MovieList = ({movies}) => {
    // const d = Array.from(movies);
    const movies1= movies.data.data;
    const history = useHistory();
    const [ratings, setRatings]=useState(-1);
    
    const routeChange = (movie,id)=>{
        // id.preventDefault();
      let path = '/viewmore';
      let param= movie;
      history.push(`${path}/${param}`);
    console.log('ID: '+movie);
    }

    const routeChange2 = (movie,id)=>{
        let path = '/rate';
        let param= movie;
        history.push(`${path}/${param}`);
      console.log('ID: '+movie);
    }

    const avgRatings=async(id)=>{
        const data = await axios
          .get(`${API_URL}/api/movieRatings/${id}`)
          .then(res=> res.data);
        console.log(data)
        return data;
        // return ratings;
    }
    const getAvgRatings=(id)=>{
      if(ratings===-1){

        avgRatings(id).then(
          data=> setRatings(data)
        )
      }
      return ratings;
    }
    
    console.log(movies.data);
    return ( 
        <div className="movie-list">
            {movies.data.map((movie)=>(
                // {checkData(movie.name,movie.desc,movie.image)}
                
                    <div class="content max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 " key = {movie._id}>
                        <div class="content-overlay">
                        </div>
                        <img class="w-full content-image" src={'/uploads/'+movie.image} alt={movie.name} />
                        <div class="content-details fadeIn-bottom">
                            <div class="flex items-center justify-center">
                            <svg class="mx-4 w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <h3 class="content-title   ">
                                {
                                  getAvgRatings(movie._id)
                                }/5.0</h3>
                            </div>
                            <p class="content-text">{movie.desc}</p>
                            <button onClick={routeChange2.bind(null,movie._id)} class="my-2 bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
                                    Rate
                                </button>
                            
                            <br></br>
                            <button onClick={ routeChange.bind(null,movie._id)} class=" my-4 bg-transparent hover:bg-green-400 text-green-600 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded">
                                View More
                            </button>
                        </div>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">{movie.name}</div>
                            
                        </div>
                    </div>
                
            ))}
        </div>
     );
}
 
export default MovieList;