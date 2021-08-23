import React,{ useState, useEffect } from 'react';
import './ViewMore.css';
import {API_URL} from './config';
import { useHistory } from "react-router";
import {useParams} from "react-router-dom";
import './tailwindcss/styles.css';
import Spinner from './Spinner';

const ViewMore =  () => {
    const {id} = useParams();
    const [movies, setMovies]= useState(null);
    const history = useHistory();
    const routeChange = ()=>{
        let path = '/';
        history.push(path);
      }
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
    else console.log(movies.data.name);
      
    return ( 

        
        <div className="ViewMore">
            <body class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover vm2">
                <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        
                {/* <!--Main Col--> */}
                <div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
                

                    <div class="p-4 md:p-12 text-center lg:text-left">
                        {/* <!-- Image for mobile view--> */}
                        <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center vm1"></div>
                        {/* {movies.data.map((movie)=>( */}
                            <div>
                            <h1 class="text-3xl font-bold pt-8 lg:pt-0">{movies.data.name}</h1>
                            <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                            <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg class="w-4 h-4 fill-current text-yellow-400 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg> 4.0/5.0</p>
                            <p class="pt-2 text-black text-xs lg:text-sm flex items-center justify-center lg:justify-start"><svg class="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg> Reviews:</p>
                            <p class="pt-8 text-sm">{movies.data.desc}</p>
                            </div>
                        {/* ))}   */}

                        <div class="pt-12 pb-8">
                            <button onClick={routeChange} class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
                            Go Back
                            </button> 
                        </div>

                        
                        
                        {/* <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->  */}

                    </div>

                </div>
                
                {/* <!--Img Col--> */}
                <div class="w-full lg:w-2/5">
                    {/* <!-- Big profile image for side bar (desktop) --> */}
                    <img src={'/uploads/'+movies.data.image} alt={movies.data.name} class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"/>
                    {/* <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A --> */}
                    
                </div>
                
                
            

            </div>
            </body>
        </div>
     );
}
 
export default ViewMore;