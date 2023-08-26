import './App.css';
import './styles/Utils/common-utils.css'
import NavBar from './components/NavBar'
import PortfolioDescription from './components/PortfolioDescription';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "aos/dist/aos.css"
import AOS from 'aos';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <div className="App">
      <div className="portfolio-desc-full-section">
        <NavBar />
        <PortfolioDescription />
      </div>
      <div className="portfolio-details">
        <Contact/>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
