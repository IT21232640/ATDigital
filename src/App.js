import { BrowserRouter, Routes, Route} from 'react-router-dom'

//pages and components
import Home from './pages/Home'
import Header from './pages/Header';
import Footer from './pages/Footer';
import Landing from './pages/Landing';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({ duration: 1000, once: false })
  
  return (
    
    <div className="App">
      
      <BrowserRouter>
        <div className="pages">
          <Header/>
          
          <Routes>
            <Route 
              path="/"
              element = {< Landing/>}
            />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
