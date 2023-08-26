import './App.css';
import NavBar from './components/NavBar'
import PortfolioDescription from './components/PortfolioDescription';
import Footer from './components/Footer';
import "aos/dist/aos.css"
import AOS from 'aos';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <div className="App">
      <div className="portfolio-desc-full-section">
        <NavBar />
        <PortfolioDescription/>
        <Footer/> 
      </div>
    </div>
  );
}

export default App;
