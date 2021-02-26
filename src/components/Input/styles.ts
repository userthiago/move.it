import styled, { css } from 'styled-components';
import { pixelToRem } from '../../helpers/styleUtils';

interface InputProps {
  $valueInput: boolean;
}

export const InputContainer = styled.div<InputProps>`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: ${pixelToRem(12)}rem ${pixelToRem(12)}rem;
    border: solid 1px var(--gray-line);
    border-radius: 4px;
    transition: all 0.2s ease;

    &:focus {
      border-color: var(--blue-dark);
      outline: 0;
    }

    ${({ $valueInput }) => $valueInput && css`
      border-color: var(--blue-dark);
    `}

    @media(max-width: 720px) {
      padding: ${pixelToRem(16)}rem ${pixelToRem(12)}rem;

      font-size: ${pixelToRem(24)}rem;
    }

    @media(max-width: 400px) {
      font-size: ${pixelToRem(16)}rem;
    } 
  }

  label {
    position: absolute;
    top: 50%;
    left: ${pixelToRem(12)}rem;

    background-color: var(--white);
    padding: 0 2px;
    transform: translateY(-50%);
    transition: all 0.2s ease;

    line-height: 1;
    
    @media(max-width: 720px) {
      font-size: ${pixelToRem(20)}rem;
    }

    @media(max-width: 400px) {
      font-size: ${pixelToRem(16)}rem;
    } 

    ${({ $valueInput }) => $valueInput && css`
      top: 0px;

      color: var(--blue-dark);
      font-size: ${pixelToRem(12)}rem;

      @media(max-width: 720px) {
        font-size: ${pixelToRem(16)}rem;
      }

      @media(max-width: 400px) {
        font-size: ${pixelToRem(12)}rem;
      } 
    `}
  }
  
  input:focus + label {
    top: 0px;

    color: var(--blue-dark);
    font-size: ${pixelToRem(12)}rem;

    @media(max-width: 720px) {
      font-size: ${pixelToRem(16)}rem;
    }

    @media(max-width: 400px) {
      font-size: ${pixelToRem(12)}rem;
    } 
  }
`;
