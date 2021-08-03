import Footer from './Footer';
import Navbar from './Navbar';
import {Link, useHistory} from "react-router-dom";
import './tailwindcss/styles.css';
import img from './img/mulan.jpg';
import img2 from './img/soul.jpg';
import './Home.css';
function Home() {
  
    function changeOpacity(e){
      e.target.style.opacity = 0.5;
    }
    function revertOpacity(e){
      e.target.style.opacity = 1.0;
    }

    const history = useHistory();

    const routeChange = ()=>{
      let path = '/viewmore/:id';
      history.push(path);
    }

    const routeChange2 = ()=>{
      let path = '/rate/:id';
      history.push(path);
    }

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
          <div class="flex-grow container mx-auto py-4 grid lg:grid-cols-3 sm:grid-cols-2">
            
            <div class="content max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 ">
            <div class="content-overlay"></div>
            <img class="w-full content-image" src={img} alt="Mulan" />
            <div class="content-details fadeIn-bottom">
              <div class="flex items-center justify-center">

              <svg class="mx-4 w-4 h-4 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
              <h3 class="content-title   ">
                  4.0/5.0</h3>
              </div>
              <p class="content-text">This is a short description</p>
              <button onClick={routeChange2} class="my-2 bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
                    Rate
                  </button>
              
              <br></br>
                  <button onClick={routeChange} class=" my-4 bg-transparent hover:bg-green-400 text-green-600 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded">
                    View More
                  </button>
            </div>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Mulan</div>
                
              </div>
              

            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
              
            <img class="w-full" src={img2} alt="Soul"
            onMouseEnter={changeOpacity}
            onMouseLeave={revertOpacity}/>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Soul</div>
                
              </div>
              

            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 ">
              <div class="absolute m-16 py-32">
                  <h1 class="font-bold text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-300 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg> 4.0/5.0
                  </h1>
                  <button class="bg-green-300 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
                    Rate
                  </button>
                  <br></br>
                  <button class="bg-transparent hover:bg-green-300 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded">
                    View More
                  </button>
              </div>
              <div class="relative">

                <img class="w-full" src={img} alt="Mulan"
                onMouseEnter={changeOpacity}
                onMouseLeave={revertOpacity}/>
              </div>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Mulan</div>
                
              </div>
              

            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
              
            <img class="w-full" src={img2} alt="Soul"
            onMouseEnter={changeOpacity}
            onMouseLeave={revertOpacity}/>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Soul</div>
                
              </div>
              

            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
  
  export default Home;