import styled from 'styled-components';
import { pixelToRem } from '../../helpers/styleUtils';

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(242, 243, 245, 0.8);

  .modal {
    position: relative;

    background-color: var(--white);
    width: 100%;
    max-width: 400px;
    padding: 2rem 3rem;
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

    text-align: center;

    header{
      color: var(--blue);
      font-size: ${pixelToRem(140)}rem;
      font-weight: 600;
      background: url('icons/levelup.svg') no-repeat center;
      background-size: contain;
    }
    
    strong {
      color: var(--title);
      font-size: ${pixelToRem(40)}rem;
    }

    p {
      margin-top: 0.25rem;

      color: var(--text);
      font-size: ${pixelToRem(20)}rem;
    }

    button {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;

      background: transparent;
      border: 0;

      font-size: 0;
    }
  }
`;
