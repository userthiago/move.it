import styled from 'styled-components';
import { pixelToRem } from '../../helpers/styleUtils';

export const Container = styled.div`
  color: var(--title);
  font-family: 'Rajdhani';
  font-weight: 600;

  .countdown {
    &__timer-container {
      display: flex;
      align-items: center;

      > div {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        background: var(--white);
        border-radius: 5px;
        box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

        font-size: ${pixelToRem(120)}rem;
        text-align: center;

        span {
          flex: 1;

          &:first-child {
            border-right: 1px solid #f0f1f3;
          }

          
          &:last-child {
            border-left: 1px solid #f0f1f3;
          }
        }
      }

      > span {
        font-size: ${pixelToRem(104)}rem;
        margin: 0 ${pixelToRem(8)}rem;
      }
    }
  }
`;
