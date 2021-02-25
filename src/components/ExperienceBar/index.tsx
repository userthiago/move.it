import React, { useContext } from 'react';
import { ProfileContext } from '../../contexts/ProfileContext';

import { Container } from './styles';

const ExperienceBar: React.FC = () => {
  const {currentExperience, experienceToNextLevel} = useContext(ProfileContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

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