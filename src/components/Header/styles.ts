import { shade } from 'polished';
import styled from 'styled-components';
import { pixelToRem } from '../../helpers/styleUtils';

interface HeaderProps {
  $menuState: boolean;
}

export const HeaderContainer = styled.header<HeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${pixelToRem(16)}rem 0 ${pixelToRem(36)}rem;

  > img {
    width: ${pixelToRem(200)}rem;
  }

  > button {
    opacity: ${({$menuState}) => $menuState ? '0' : '1'};
    pointer-events: ${({$menuState}) => $menuState ? 'none' : 'unset'};
    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    height: ${pixelToRem(36)}rem;
    width: ${pixelToRem(36)}rem;
    padding: ${pixelToRem(4)}rem;
    border: 0;
    transition: all 0.2s ease;

    font-size: ${pixelToRem(36)}rem;
    color: var(--blue);

    border-radius: 4px;

    &:hover {
      color: var(--blue-dark);
    }
  }
`;
