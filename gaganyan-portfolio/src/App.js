import "./App.css";
import "./styles/Utils/common-utils.css";
import NavBar from "./components/NavBar";
import PortfolioDescription from "./components/PortfolioDescription";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import MySkills from "./components/MySkills";
import './App.css';
import './styles/Utils/common-utils.css';
import Resume from './components/Resume';
import Work from './components/Work'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="App">
      <div className="portfolio-desc-full-section">
        <NavBar />
        <PortfolioDescription />
      </div>
      <div className="portfolio-details">
        <MySkills />
        {/* <Work /> Making this section hidden until new Projects gets added to this portolio, feel free to add projects if you wish by updating the info in </Work > component */}
        <Resume/>
        <Contact />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
