import styled from "styled-components";
import { pixelToRem } from "../../helpers/styleUtils";

interface ButtonProps {
  $secondaryStyle?: boolean;
}

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(${({ $secondaryStyle }) => $secondaryStyle ? '--white' : '--blue'});
  width: 100%;
  height: ${pixelToRem(80)}rem;
  margin-top: ${pixelToRem(32)}rem;
  border: 0;
  border-radius: 5px;
  transition: background-color 0.2s;

  color: var(${({ $secondaryStyle }) => $secondaryStyle ? '--title' : '--white'});
  font-size: ${pixelToRem(20)}rem;
  font-weight: 600;

  &:not(:disabled):hover {
    background: var(${({ $secondaryStyle }) => $secondaryStyle ? '--red' : '--blue-dark'});

    color: var(--white);
  }

  &:disabled {
    background: var(--white);
    border-bottom: solid ${pixelToRem(4)}rem var(--green);
    cursor: not-allowed;

    color: var(--text);

    > img {
      margin-left: ${pixelToRem(17.5)}rem;
    }
  }
`;

export default Button;