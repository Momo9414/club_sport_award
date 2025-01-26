import React, { useState } from 'react';
import './VotingFootballPage.css';

const NOMINEES = [
  {
    id: '1',
    nom: 'Kouadio',
    prenom: 'Jean',
    classe: 'L3 INFO',
    photoUrl: 'https://via.placeholder.com/300x400',
    parcours: '1/2 Finaliste',
    buts: 12,
    votes: 0,
    description: 'Attaquant polyvalent avec une technique remarquable'
  },
  {
    id: '2',
    nom: 'Koffi',
    prenom: 'Serge',
    classe: 'L2 INFO',
    photoUrl: 'https://via.placeholder.com/300x400',
    parcours: 'Finaliste',
    buts: 15,
    votes: 0,
    description: 'Milieu offensif au potentiel explosif'
  },
  {
    id: '3',
    nom: 'Koffi',
    prenom: 'Serge',
    classe: 'L2 INFO',
    photoUrl: 'https://via.placeholder.com/300x400',
    parcours: 'Finaliste',
    buts: 15,
    votes: 0,
    description: 'Milieu offensif au potentiel explosif'
  }
];

const VotingFootballPage = () => {
  const [nominees, setNominees] = useState(NOMINEES);
  const [votedNominees, setVotedNominees] = useState({});

  const handleVote = (nomineeId) => {
    if (votedNominees[nomineeId]) {
      alert('Vous avez déjà voté pour ce nominé');
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
    <div className="voting-football-page">
      <div className="head">
        <button>Accueil</button>
        <button>Retour</button>
      </div>
      <h1 className="page-title">Ballon d'Or Interclasse 2025</h1>
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
                <span className="stat">Buts: {nominee.buts}</span>
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

export default VotingFootballPage;