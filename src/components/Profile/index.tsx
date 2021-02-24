import { Main } from 'next/document';
import React from 'react';

import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <img src="https://github.com/userthiago.png" alt="Thiago Henrique Santos"/>
      <div className="profile__info">
        <strong>Thiago Santos</strong>
        <p><img src="icons/level.svg" alt="Icone de level"/> Level 1</p>
      </div>
    </Container>
  );
}

export default Profile;