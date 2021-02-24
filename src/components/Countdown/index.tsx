import React from 'react';
import Button from '../Button';

import { Container } from './styles';

const Countdown: React.FC = () => {
  return (
    <Container>
      <div className="countdown__timer-container">
        <div>
          <span>2</span>
          <span>5</span>
        </div>
        <span>:</span>
        <div>
          <span>0</span>
          <span>0</span>
        </div>
      </div>

      <Button type="button">Iniciar um ciclo</Button>
    </Container>
  );
}

export default Countdown;