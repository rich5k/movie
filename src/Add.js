import Footer from './Footer';
import Navbar from './Navbar';
import React,{ useState } from "react";
import {useHistory} from 'react-router-dom';
import './tailwindcss/styles.css';
import './Add.css';
import axios from 'axios';
import {API_URL} from './config';
const Add = () => {

    const [name, setName]= useState('');
    const [desc, setDesc]= useState('');
    const [image, setImage]= useState(null);
    const [isPending, setIsPending]=useState(false);
    const history = useHistory();

    const handleFiles = (e)=> {
        setImage(e.target.files[0])
        console.log(image);
    }

    // const handleSubmit= (e)=>{
    //     // e.preventDefault();
    //     alert('form was submitted');
    //     const movie ={name, desc, image};
    //     setIsPending(true);
    //     fetch(`${API_URL}/api/movie`,{
    //         method: 'POST',
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify(movie)
    //     }).then(()=>{
    //         console.log('new movie added')
    //         alert('new movie added')
    //         setIsPending(false);
    //         history.push('/');
    //     })
        

    // }

    const submitForm= ()=>{
        const formData = new FormData();
        formData.append('name', name);
        formData.append('desc', desc);
        formData.append('image', image);

        axios
            .post(`${API_URL}/api/movie`, formData)
            .then((res)=>{
                alert('new movie added');
                history.push('/');
            })
            .catch((err)=> setTimeout(()=>{
                alert('Movie error')
            },5000));
    }
    return ( 
        <div className="Add">
            <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg2 bg-cover">
            <Navbar></Navbar>
            
            <div className="min-h-screen flex items-center justify-center">
            {/* <form onSubmit={handleSubmit}> */}
            <form >
                <div className="shadow sm:rounded-md bg-white sm:overflow-hidden">
                    <div className="px-4 py-5 space-y-6 sm:p-6">
                        <div className="">
                            <div className="col-span-3 sm:col-span-2">
                                <label for="name" className="block text-sm font-medium text-gray-700">
                                Name
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    
                                    <input type="text" name="name" id="name" required value={name} onChange={(e)=> setName(e.target.value)} className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Mulan" />
                                </div>
                            </div>
                        </div>

                    <div>
                        <label for="description" className="block text-sm font-medium text-gray-700">
                        Description
                        </label>
                        <div className="mt-1">
                            <textarea id="description" name="desc" required value={desc} onChange={(e)=> setDesc(e.target.value)} rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                            Brief description of the movie. Get others excited to watch it.
                        </p>
                    </div>

                    

                    <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Cover photo
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                            <label for="image" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span>Upload a file</span>
                            <input id="image" name="file" required onChange={handleFiles} type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit" onClick={submitForm}  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                    </button>
                </div>
                </div>
            </form>
            </div>
            
            <Footer></Footer>
            </div>
        </div>
     );
}
 
export default Add;