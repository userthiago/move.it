import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { TimeContext } from '../../contexts/TimeContext';

import { Container } from './styles';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(TimeContext);

  return (
    <Container>
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
              onClick={() => { 
                resetChallenge()
                resetCountdown();
              }}
            >
              Falhei
            </button>
            <button 
              type="button"
              className="challenge__button challenge__button--succeeded"
              onClick={() => { 
                completeChallenge()
                resetCountdown();
              }}
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
        </div>
      )}
    </Container>
  );
}

export default ChallengeBox;