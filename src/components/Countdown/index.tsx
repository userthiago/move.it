import React, { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import Button from '../Button';

import { Container } from './styles';

let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
  const { startNewChallenge } = useContext(ChallengesContext);

  const defaultTime = 0.1 * 60;

  const [time, setTime] = useState(defaultTime);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function changeCountdown() {
    setIsActive(!isActive);
    if(isActive) {
      clearTimeout(countdownTimeout);
      setTime(0.1 * 60);
    }
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <Container>
      <div className="countdown__timer-container">
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      <Button 
        type="button" 
        onClick={!hasFinished ? changeCountdown : () => {}} 
        disabled={hasFinished}
        $secondaryStyle={isActive}
      >
        {
          hasFinished ? <>Ciclo encerrado <img src="icons/check.svg" alt="Icone de concluído"/></> : 
          (isActive ? 'Abandonar ciclo' : 'Iniciar um ciclo')
        }
      </Button>
    </Container>
  );
}

export default Countdown;