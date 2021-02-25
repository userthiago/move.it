import React, { useContext } from 'react';
import { ProfileContext } from '../../contexts/ProfileContext';

import { Container } from './styles';

const Profile: React.FC = () => {
  const { level } = useContext(ProfileContext);

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