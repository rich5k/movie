import Footer from './Footer';
import Navbar from './Navbar';

import './tailwindcss/styles.css';
import img from './img/mulan.jpg';
import img2 from './img/soul.jpg';
function Home() {
  
    function changeOpacity(e){
      e.target.style.opacity = 0.5;
    }
    function revertOpacity(e){
      e.target.style.opacity = 1.0;
    }

    return (
      <div className="Home">
        
        <div class="flex flex-col bg-black">
          <Navbar></Navbar>
          <div class="flex-grow container mx-auto py-4 grid lg:grid-cols-3 sm:grid-cols-2">
            
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 ">
              
            <img class="w-full" src={img} alt="Mulan" 
            onMouseEnter={changeOpacity}
            onMouseLeave={revertOpacity}/>
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
              
            <img class="w-full" src={img} alt="Mulan"
            onMouseEnter={changeOpacity}
            onMouseLeave={revertOpacity}/>
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