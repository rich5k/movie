import Footer from './Footer';
import Navbar from './Navbar';
import {Link} from "react-router-dom";
import './tailwindcss/styles.css';
import MovieList from './MovieList';
import { useState, useEffect } from 'react';
import './Home.css';
function Home() {
  
  const [movies, setMovies]= useState(null);
  
  useEffect(()=>{
    fetch('http://localhost:3000/api/movies')
    .then(res =>{
      return res.json();
    })
    .then(data=>{
      setMovies(data);
    })
  },[])
    return (
      <div className="Home">
        
        <div class="flex flex-col bg-black">
          <Navbar></Navbar>
          <div class="flex flex-row-reverse">
            <Link to="/add">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-12 my-6 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            </Link>

          </div>
          
          {movies && <MovieList movies ={movies} />}
          
          <Footer/>
        </div>
      </div>
    );
  }
  
  export default Home;