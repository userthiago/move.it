import styled, { keyframes } from 'styled-components';
import { pixelToRem } from '../../helpers/styleUtils';

const animationBackground = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const animationBox = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;

  animation: ${animationBackground} 0.4s;

  .modal {
    &__steps-box {
      display: flex;
      flex-direction: column;
      align-items: center;

      background: var(--white);
      height: ${pixelToRem(640)}rem;
      width: ${pixelToRem(540)}rem;
      padding: ${pixelToRem(32)}rem ${pixelToRem(62)}rem;
      border-radius: 8px;

      animation: ${animationBox} 0.4s;

      @media(max-width: 720px) {
        height: 100%;
        width: 100%;
        padding: ${pixelToRem(32)}rem ${pixelToRem(36)}rem;
        border-radius: 0;
      }
    }
  }

  .steps-box {
    &__ball-group {
      display: flex;

      .ball-group__ball {
        display: block;
        background-color: var(--gray-line);
        height: ${pixelToRem(10)}rem;
        width: ${pixelToRem(10)}rem;
        border-radius: 50%;
        transition: background-color 0.2s ease;

        & + .ball-group__ball {
          margin-left: ${pixelToRem(12)}rem;
        }

        &--active {
          background: var(--blue);
        }
      }
    }

    &__form {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .form {
        &__step {
          flex: 1;
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          img {
            width: 100%;
            max-width: ${pixelToRem(320)}rem;

            @media(max-width: 720px) {
              max-width: ${pixelToRem(400)}rem;
            }
          }
          
          strong {
            margin: ${pixelToRem(16)}rem 0;

            color: var(--blue);
            font-size: ${pixelToRem(24)}rem;
            text-align: center;

            @media(max-width: 720px) {
              margin: ${pixelToRem(24)}rem 0;

              font-size: ${pixelToRem(32)}rem;
            }

            @media(max-width: 400px) {
              font-size: ${pixelToRem(24)}rem;
            }
          }

          p {
            margin-bottom: ${pixelToRem(32)}rem;

            color: var(--text);
            text-align: center;

            @media(max-width: 720px) {
              font-size: ${pixelToRem(20)}rem;
            } 

            @media(max-width: 400px) {
              font-size: ${pixelToRem(16)}rem;
            } 
          }

          &--active {
            display: flex;
          }
        }
      }
    }
  }
`;

export const FormButton = styled.button<{ color?: string }>`
  background-color: var(${({ color }) => color || '--gray'});
  height: ${pixelToRem(48)}rem;
  width: 100%;
  border: 0;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  color: var(--white);
  font-weight: 500;

  &:hover {
    background-color: var(${({ color }) => color || '--gray'}-dark);
  }

  & + & {
    margin-top: ${pixelToRem(8)}rem;
  }

  &:first-of-type {
    margin-top: ${pixelToRem(32)}rem;
  }

  @media(max-width: 720px) {
    height: ${pixelToRem(64)}rem;

    font-size: ${pixelToRem(20)}rem;
  }

  @media(max-width: 400px) {
    height: ${pixelToRem(56)}rem;

    font-size: ${pixelToRem(16)}rem;
  } 
`;