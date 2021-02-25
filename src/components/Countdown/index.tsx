import React, { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';

import Button from '../Button';

import { Container } from './styles';

const Countdown: React.FC = () => {
  const {minutes, seconds, isActive, hasFinished, changeCountdown} = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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