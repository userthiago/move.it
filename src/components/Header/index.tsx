import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { MenuContext } from '../../contexts/MenuContext';

import { HeaderContainer } from './styles';

const Header: React.FC = () => {
  const { changeMenuState, isMenuActive } = useContext(MenuContext);
  return (
    <HeaderContainer $menuState={isMenuActive}>
      <img src="/logo-full.svg" alt="move.it"/>
      <button type="button" onClick={changeMenuState}><FaBars /></button>
    </HeaderContainer>
  );
}

export default Header;