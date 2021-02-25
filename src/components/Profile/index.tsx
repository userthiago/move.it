import { Main } from 'next/document';
import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container } from './styles';

const Profile: React.FC = () => {
  const {level} = useContext(ChallengesContext);

  return (
    <Container>
      <img src="https://github.com/userthiago.png" alt="Thiago Henrique Santos"/>
      <div className="profile__info">
        <strong>Thiago Santos</strong>
        <p><img src="icons/level.svg" alt="Icone de level"/> Level {level}</p>
      </div>
    </Container>
  );
}

export default Profile;