import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import './tailwindcss/styles.css';
function App() {
  return (
    <div className="App">
      <div class="flex flex-col h-screen">
        <Navbar></Navbar>
        <div class="flex-grow">
          <h1 class="bg-red-100">Start of Movie Rater App</h1>

        </div>
        <Footer/>

      </div>
    </div>
  );
}

export default App;
