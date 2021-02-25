import styled, { css, keyframes } from 'styled-components';
import { shade } from 'polished';
import { pixelToRem } from '../../helpers/styleUtils';

interface MenuProps {
  $menuState: boolean;
}

export const Container = styled.div<MenuProps>`
  z-index: 1000;
  position: fixed;
  right: 0;
  top: 0;
  
  background: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: ${({$menuState}) => $menuState ? '100%' : 0};
  opacity: ${({$menuState}) => $menuState ? 1 : 0};
  transition: opacity 0.2s;

  .menu {
    &__wrapper {
      position: fixed;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      background: var(--white);
      width: 450px;
      height: 100%;
      padding: 3rem 2rem;
      box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

      pointer-events: ${({$menuState}) => $menuState ? 'unset' : 'none'};
      transform: translateX(${({$menuState}) => $menuState ? '0px' : '450px'});
      transition: all 0.4s ease;

      @media(max-width: 600px) {
        transform: translateX(${({$menuState}) => $menuState ? '0px' : '100%'});
        width: 100%;
      }

      > button {
        position: absolute;
        top: 1rem;
        right: 1rem;

        background-color: transparent;
        border: 0;
        border-radius: 50%;
        transition: background-color 0.2s ease;

        &:hover {
          background-color: ${shade(0.08, '#ffffff')};
        }
      }
    }
  }
`;

interface ProfileProps {
  levelPercent: number;
}

export const ProfileContainer = styled.div<ProfileProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  > p {
    background: var(--blue);
    margin-top: ${pixelToRem(8)}rem;
    padding: ${pixelToRem(4)}rem ${pixelToRem(8)}rem;
    border-radius: 4px;

    font-size: ${pixelToRem(12)}rem;
    color: var(--white);
  }

  .profile {
    &__picture {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      > img {
        position: absolute;
        height: ${pixelToRem(150)}rem;
        width: ${pixelToRem(150)}rem;

        border-radius: 50%;
      }

      .picture {
        &__circular-progress {
          ${({ levelPercent }) => {
              const direction = levelPercent < 51 ? 'right' : 'left';
              const color = levelPercent < 51 ? '#B3B9FF' : '#5965E0';

              return css`
                background: linear-gradient(to ${direction}, ${color} 50%, transparent 50%, transparent),
                linear-gradient(${90 + 3.6 * levelPercent}deg, #5965E0 50%, #B3B9FF 50%);
              `;
          }}
            
          display: block;
          width: ${pixelToRem(164)}rem;
          height: ${pixelToRem(164)}rem;
          border-radius: 50%;
        }
      }
    }

    &__info {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-top: ${pixelToRem(8)}rem;
      margin-bottom: ${pixelToRem(8)}rem;

      > strong {
        margin-left: ${pixelToRem(30)}rem;
        margin-right: ${pixelToRem(6)}rem;

        font-size: ${pixelToRem(24)}rem;
        line-height: 1.5;
      }

      > button {
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: transparent;
        padding: ${pixelToRem(6)}rem;
        border: 0;
        border-radius: 50%;
        transition: background-color 0.25s;

        font-size: ${pixelToRem(18)}rem;
        color: var(--gray);

        &:hover {
          background-color: ${shade(0.08, '#ffffff')};
        }
      }
    }
  }
`;