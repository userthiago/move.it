import React, { useState, useEffect } from 'react';
import Button from '../Button';

import { Container } from './styles';

const Countdown: React.FC = () => {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setActive(!active);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } 
  }, [active, time]);

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

      <Button type="button" onClick={startCountdown}>{active ? 'Pausar o' : 'Iniciar um'} ciclo</Button>
    </Container>
  );
}

export default Countdown;