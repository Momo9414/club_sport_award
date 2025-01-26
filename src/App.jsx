import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import VotingHomePage from './pages/VotingHomePage';
import VotingFootballPage from './pages/VotingFootballPage';
import VotingBasketballPage from './pages/VotingBasketballPage';
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <div className="header-logo">
            
          </div>
          <nav className="header-nav">
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/football">Football</Link></li>
              <li><Link to="/basketball">Basket</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/football" element={<VotingFootballPage />} />
          <Route path="/basketball" element={<VotingBasketballPage />} />
          <Route path="/" element={<VotingHomePage />} />
        </Routes>

        <footer className="app-footer">
          <p>&copy; 2023 Voting App. Tous droits réservés.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;