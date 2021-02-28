import React, { useContext } from 'react';
import { ProfileContext } from '../../contexts/ProfileContext';

import { Container } from './styles';

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useContext(ProfileContext);

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
}

export default CompletedChallenges;