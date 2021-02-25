import React, { useContext } from 'react';
import { ProfileContext } from '../../contexts/ProfileContext';

import { Container } from './styles';

const ExperienceBar: React.FC = () => {
  const {percentToNextLevel, currentExperience, experienceToNextLevel} = useContext(ProfileContext);

  return (
    <Container experience={percentToNextLevel}>
      <span>0 xp</span>
      <div className="bar">
        <div className="bar__progression" />
        <span className="bar__current-experience">{currentExperience} xp</span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  );
}

export default ExperienceBar;