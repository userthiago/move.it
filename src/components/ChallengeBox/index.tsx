import axios from 'axios';
import React, { FormEvent, useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';
import { ProfileContext } from '../../contexts/ProfileContext';

import { Container } from './styles';

const ChallengeBox: React.FC = () => {
  const { level, challengesCompleted, currentExperience } = useContext(ProfileContext);
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown();
  }

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountdown();
  }

  function handleSignUpToSystem() {
    axios.post('/api/users', {
      username: 'userthiago',
      level,
      currentExperience,
      challengesCompleted,
    })
  }

  return (
    <Container $hasChallenge={!!activeChallenge}>
      {activeChallenge ? 
      (
        <div className="challenge__active">
          <header>Ganhe {activeChallenge.amount}xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt={`Icone de desafio de ${activeChallenge.type}`} />
            <strong>Novo desafio</strong>
            <p>
              {activeChallenge.description}
            </p>
          </main>
          <footer>
            <button 
              type="button"
              className="challenge__button challenge__button--failed"
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button 
              type="button"
              className="challenge__button challenge__button--succeeded"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : 
      (
        <div className="challenge__not-active">
          <strong>Finalize ciclos para receber desafios a serem completados</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Complete-os e ganhe experiência e avance de level.
          </p>
          <button type="button" onClick={handleSignUpToSystem}>Teste</button>
        </div>
      )}
    </Container>
  );
}

export default ChallengeBox;