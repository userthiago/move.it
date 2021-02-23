import React, { useState } from 'react';
import { calcExperience } from '../../helpers/styleUtils';

import { Container } from './styles';

interface ExperienceBarProps {
  actualExperience: number;
  maxExperience: number;
}

const ExperienceBar: React.FC<ExperienceBarProps> = ({actualExperience, maxExperience}) => {
  return (
    <Container experience={calcExperience(actualExperience, maxExperience)}>
      <span>0 xp</span>
      <div className="bar">
        <div className="bar__progression" />
        <span className="bar__current-experience">{actualExperience} xp</span>
      </div>
      <span>{maxExperience} xp</span>
    </Container>
  );
}

export default ExperienceBar;