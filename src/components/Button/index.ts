import styled from "styled-components";
import { pixelToRem } from "../../helpers/styleUtils";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--blue);
  width: 100%;
  height: ${pixelToRem(80)}rem;
  margin-top: ${pixelToRem(32)}rem;
  border: 0;
  border-radius: 5px;
  transition: background-color 0.2s;

  color: var(--white);
  font-size: ${pixelToRem(20)}rem;
  font-weight: 600;

  &:hover {
    background: var(--blue-dark);
  }
`;

export default Button;