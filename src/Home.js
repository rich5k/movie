import Footer from './Footer';
import Navbar from './Navbar';
import './tailwindcss/styles.css';
import img from './img/mulan.jpg';
import img2 from './img/soul.jpg';
function Home() {
    return (
      <div className="Home">
        
        <div class="flex flex-col bg-black">
          <Navbar></Navbar>
          <div class="flex-grow container mx-auto py-4">
            
            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              
            <img class="w-full" src={img} alt="Mulan"/>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Mulan</div>
                
              </div>
              

            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              
            <img class="w-full" src={img2} alt="Soul"/>
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