import React,{ useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './tailwindcss/styles.css';
import './Rate.css';
import axios from 'axios';
import {API_URL} from './config';
import {useHistory,useParams} from "react-router-dom";
const Rate = () => {
    const {id} = useParams('');
    const [movies, setMovies]= useState(null);
    const [rating, setRating]= useState(0);
    const [review, setReview]= useState('');
    const history = useHistory();
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
    const submitForm= (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('id', id);
        formData.append('rating', rating);
        formData.append('review', review);

        try{
            const response =axios.post(`${API_URL}/api/movieRating`, formData);
            console.log('Returned data:',response);
            history.push('/');
        }
        catch(e){
            console.log(`Axios request failed: ${e}`)
        }

        // axios
        //     .post(`${API_URL}/api/movieRating`, formData)
        //     .then((res)=>{
        //         alert('new movie rating added');
        //         history.push('/');
        //     })
        //     .catch((err)=> setTimeout(()=>{
        //         alert('Movie rating error')
        //     },5000));
    }
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
                    <input type="hidden" value={id} />
                    <div className="px-4 py-5 space-y-6 sm:p-6">
                        <div className="flex justify-center items-center">
                        <div class="flex items-center mt-2 mb-4">
                            <ul className="rate-area">
                                
                                <input type = "radio" id= "5-star" name="rating" value="5" value={rating} onChange={(e)=> setRating(5)}/>
                                <label for= "5-star">5 stars</label>
                                <input type = "radio" id= "4-star" name="rating" value="4" value={rating} onChange={(e)=> setRating(4)}/>
                                <label for= "4-star">4 stars</label>
                                <input type = "radio" id= "3-star" name="rating" value="3" value={rating} onChange={(e)=> setRating(3)}/>
                                <label for= "3-star">3 stars</label>
                                <input type = "radio" id= "2-star" name="rating" value="2" value={rating} onChange={(e)=> setRating(2)}/>
                                <label for= "2-star">2 stars</label>
                                <input type = "radio" id= "1-star" name="rating" value="1" value={rating} onChange={(e)=> setRating(1)}/>
                                <label for= "1-star">1 star</label>
                                
                            </ul>
                        </div>
                        </div>

                    <div>
                        <label for="review" className="block text-bold font-medium text-gray-700">
                        Review
                        </label>
                        <div className="mt-1">
                            <textarea id="review" name="review" required value={review} onChange={(e)=> setReview(e.target.value)} rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="This movie was great!!!"></textarea>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                            Brief review of {movies.data.name}. Let others know what you think.
                        </p>
                    </div>

                    

                    
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit" onClick={submitForm} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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