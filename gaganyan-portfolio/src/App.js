import './App.css';
import NavBar from './components/NavBar'
import PortfolioDescription from './components/PortfolioDescription';

function App() {
  return (
    <div className="App">
      <div className="portfolio-desc-full-section">
        <NavBar />
        <PortfolioDescription/>
      </div>
    </div>
  );
}

export default App;
