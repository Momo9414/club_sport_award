// VotingBasketballPage.js
import React, { useState } from 'react';
import './VotingBasketballPage.css';

const NOMINEES = [
  {
    id: '3',
    nom: 'Aké',
    prenom: 'Marie',
    classe: 'L2 RESEAU',
    photoUrl: 'https://via.placeholder.com/300x400',
    parcours: 'Finaliste',
    points: 35,
    votes: 0,
    description: 'Meneuse de jeu avec une vision de jeu exceptionnelle'
  },
  {
    id: '4',
    nom: 'Yao',
    prenom: 'Emma',
    classe: 'L3 RESEAU',
    photoUrl: 'https://via.placeholder.com/300x400',
    parcours: '1/2 Finaliste',
    points: 28,
    votes: 0,
    description: 'Arrière adroit avec un tir précis'
  }
];

const VotingBasketballPage = () => {
  const [nominees, setNominees] = useState(NOMINEES);
  const [votedNominees, setVotedNominees] = useState({});

  const handleVote = (nomineeId) => {
    if (votedNominees[nomineeId]) {
      alert("Vous avez déjà voté pour ce nominé");
      return;
    }

    const updatedNominees = nominees.map((nominee) => {
      if (nominee.id === nomineeId) {
        return { ...nominee, votes: nominee.votes + 1 };
      }
      return nominee;
    });

    setNominees(updatedNominees);
    setVotedNominees((prev) => ({ ...prev, [nomineeId]: true }));
  };

  return (
    <div className="voting-basketball-page">
      <h1 className="page-title">MVP Interpromo Basket 2025</h1>
      <div className="nominees-container">
        {nominees.map((nominee) => (
          <div key={nominee.id} className="nominee-card">
            <div className="nominee-image-container">
              <img
                src={nominee.photoUrl}
                alt={`${nominee.prenom} ${nominee.nom}`}
                className="nominee-image"
              />
            </div>
            <div className="nominee-content">
              <h3>{nominee.prenom} {nominee.nom}</h3>
              <p className="nominee-class">Classe: {nominee.classe}</p>
              <p className="nominee-description">{nominee.description}</p>
              <div className="nominee-stats">
                <span className="stat">Points: {nominee.points}</span>
                <span className="stat">Votes: {nominee.votes}</span>
              </div>
              <button
                onClick={() => handleVote(nominee.id)}
                className="vote-button"
              >
                Voter
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotingBasketballPage;