import './tailwindcss/styles.css';
import React from 'react';
import {Link} from "react-router-dom";
import img from './img/john.jpg';
function Navbar() {
    return (
      <div className="Navbar">
        <nav class="flex items-center justify-between flex-wrap bg-green-500 p-6">
        <Link to ="/">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                    <span class="font-semibold text-xl tracking-tight">Movie Rater</span>
            </div>
        </Link>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-green-200 border-green-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:flex-row-reverse lg:w-auto">
                
                <div>
                    <img class="w-12 h-12 rounded-full mr-4" src={img} alt="Avatar of Jonathan Reinink"/>
                
                </div>
            </div>
        </nav>
        
      </div>
    );
  }
  
  export default Navbar;