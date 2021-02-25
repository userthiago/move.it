import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container } from './styles';

const CompletedChallenges: React.FC = () => {
  const { completedChallenges } = useContext(ChallengesContext);

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{completedChallenges}</span>
    </Container>
  );
}

export default CompletedChallenges;