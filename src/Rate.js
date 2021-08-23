import React,{ useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './tailwindcss/styles.css';
import './Add.css';
import {useParams} from "react-router-dom";
const Rate = () => {
    const {id} = useParams();
    const [movies, setMovies]= useState(null);
    useEffect(()=>{
        if(!movies){
            fetch(`http://localhost:3000/api/movie/`+id,{
            method: "GET",
            mode:'cors'
            })
            .then(res =>{
                // console.log(res.json)
            return res.json();
            })
            .then(data=>{
            setMovies(data);
            // console.log(movies);
            })

        }
    },[id, movies])
    if(!movies) return 'Movie Loading...';
    return ( 
        <div className="Rate">
            <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg3 bg-cover">
            <Navbar></Navbar>
            <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
            <div className="min-h-screen w-full lg:w-3/5 flex items-center justify-center">
            <form action="#" method="POST">
                <div className="shadow sm:rounded-md bg-white sm:overflow-hidden">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Rate and Review
                    </h2>
                    <div className="px-4 py-5 space-y-6 sm:p-6">
                        <div className="flex justify-center items-center">
                        <div class="flex items-center mt-2 mb-4">
                            <svg class="mx-1 w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <svg class="mx-1 w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <svg class="mx-1 w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <svg class="mx-1 w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                            <svg class="mx-1 w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                        </div>
                        </div>

                    <div>
                        <label for="description" className="block text-bold font-medium text-gray-700">
                        Review
                        </label>
                        <div className="mt-1">
                            <textarea id="description" name="description" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="This movie was great!!!"></textarea>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                            Brief review of {movies.data.name}. Let others know what you think.
                        </p>
                    </div>

                    

                    
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Done
                    </button>
                </div>
                </div>
            </form>
            </div>
            
            {/* <!--Img Col--> */}
            <div class="w-full lg:w-2/5">
                {/* <!-- Big profile image for side bar (desktop) --> */}
                <img src={'/uploads/'+movies.data.image} alt={movies.data.name} class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"/>
                {/* <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A --> */}
                
            </div>
            </div>
            <Footer></Footer>
            </div>
        </div>
     );
}
 
export default Rate;