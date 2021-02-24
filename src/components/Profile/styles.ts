import styled from 'styled-components';
import { pixelToRem } from '../../helpers/styleUtils';

export const Container = styled.div`
  display: flex;
  align-items: center;

  > img {
    height: ${pixelToRem(88)}rem;
    width: ${pixelToRem(88)}rem;
    border-radius: 50%;
  }

  .profile {
    &__info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: ${pixelToRem(24)}rem;


      strong {
        color: var(--title);
        font-size: ${pixelToRem(24)}rem;
        font-weight: 600;
      }

      p {
        display: flex;
        align-items: center;

        margin-top: ${pixelToRem(8)}rem;

        font-size: ${pixelToRem(16)}rem;
        font-weight: 400;

        img {
          margin-right: ${pixelToRem(8)}rem;
        }
      }
    }
  }
`;
