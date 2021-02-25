import React, { useContext } from 'react';
import { FaCog } from 'react-icons/fa';

import { MenuContext } from '../../contexts/MenuContext';
import { ProfileContext } from '../../contexts/ProfileContext';

import { Container, ProfileContainer } from './styles';

const Menu: React.FC = () => {
  const { isMenuActive, changeMenuState } = useContext(MenuContext);
  const { level, percentToNextLevel } = useContext(ProfileContext);

  const id = 'menu';

  const handleOutsideClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log('cliquei');

    const target = e.target as HTMLInputElement;
    if (target.id !== id) changeMenuState();
  };

  return (
    <Container onClick={handleOutsideClick} $menuState={isMenuActive}>
      <div id={id} className="menu__wrapper">
        <button type="button" onClick={changeMenuState}><img src="/icons/close.svg" alt="Fechar"/></button>
        <ProfileContainer levelPercent={percentToNextLevel} >
          <div className="profile__picture">
            <img src="https://github.com/userthiago.png" alt="Thiago Henrique Santos"/>
            <span className="picture__circular-progress"></span>
          </div>
          <p>Nível {level}</p>
          <div className="profile__info">
            <strong>Thiago Santos</strong>
            <button type="button"><FaCog size={18} /></button>
          </div>
        </ProfileContainer>
      </div>
    </Container>
  );
}

export default Menu;