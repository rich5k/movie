import React,{ useState } from "react";
import './tailwindcss/styles.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {API_URL} from './config';
const SignUp = () => {
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState(undefined);
    const [cpassword, setCpassword]= useState(undefined);
    const [image, setImage]= useState(null);
    const history = useHistory();
    const handleFiles = (e)=> {
        setImage(e.target.files[0])
        console.log(image);
    }
    var passError='';
    if(typeof password !== 'undefined' && typeof cpassword !=='undefined'){
        if(password !== cpassword){
            passError="Passwords don't match";
        }
        else 
            passError= '';
    }
    const submitForm= (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('image', image);

        // axios
        //     .post(`${API_URL}/api/user`, formData)
        //     .then((res)=>{
        //         alert('new user added');
        //         history.push('/');
        //     })
        //     .catch((err)=> setTimeout(()=>{
        //         alert('user error')
        //     },5000));
        try{
            const response =axios.post(`${API_URL}/api/user`, formData);
            console.log('Returned data:',response);
            history.push('/login');
        }
        catch(e){
            console.log(`Axios request failed: ${e}`)
        }
    }
    return ( 
        <div className="SignUp">
            <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full space-y-8">
                    <div>
                    <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign Up your account
                    </h2>
                    
                    </div>
                    <form class="mt-8 space-y-6" action="#" method="POST">
                    {/* <input type="hidden" name="remember" value="true"/> */}
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        placeholder="Full Name" 
                        required value={name} onChange={(e)=> setName(e.target.value)} />

                    <input 
                        type="email"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" 
                        required value={email} onChange={(e)=> setEmail(e.target.value)}/>

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" 
                        required value={password} onChange={(e)=> setPassword(e.target.value)}/>
                        <div className="text-red-600">{passError}</div>
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" 
                        required value={cpassword} onChange={(e)=> setCpassword(e.target.value)}/>
                        <div className="text-red-600">{passError}</div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Profile Pic
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
                    <button
                        type="submit"  onClick={submitForm}
                        class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1"
                    >Create Account</button>

                    <div class="text-center text-sm text-grey-700 mt-4">
                        By signing up, you agree to the  
                        <a class="no-underline border-b border-grey-700 text-grey-700" href="#">
                             Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-700 text-grey-700" href="#">
                            Privacy Policy
                        </a>
                    </div>

                    </form>
                    <div class="text-grey-700 mt-6">
                        Already have an account? 
                        <a class="no-underline border-b border-blue-500 text-blue-500" href="../login/">
                            Log in
                        </a>.
                    </div>
                </div>
                </div>
        </div>
     );
}
 
export default SignUp;