// VotingHomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './VotingHomePage.css';

const VotingHomePage = () => {
    return (
      <div className="voting-home-page">
        <h1 className="page-title">Voting App</h1>
        <p className="page-description">
          Bienvenue dans l'application de vote ! Choisissez un événement pour commencer à voter.
        </p>
        <div className="event-buttons">
          <Link to="/football" className="event-button">Ballon d'Or Interclasse 2025</Link>
          <Link to="/basketball" className="event-button">MVP Interpromo Basket 2025</Link>
        </div>
      </div>
    );
  };
  

export default VotingHomePage;