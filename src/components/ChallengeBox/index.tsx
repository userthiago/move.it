import React from 'react';

import { Container } from './styles';

const ChallengeBox: React.FC = () => {
  const hasActiveChallenge = true;

  return (
    <Container>
      {hasActiveChallenge ? 
      (
        <div className="challenge__active">
          <header>Ganhe 400xp</header>
          <main>
            <img src="icons/body.svg" alt="Challenge"/>
            <strong>Novo desafio</strong>
            <p>
              Caminhe por 3 minutos e estique suas pernas
              pra você ficar saudável.
            </p>
          </main>
          <footer>
            <button 
              type="button"
              className="challenge__button challenge__button--failed"
            >
              Falhei
            </button>
            <button 
              type="button"
              className="challenge__button challenge__button--succeeded"
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