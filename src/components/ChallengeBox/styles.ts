import styled from 'styled-components';
import { shade } from 'polished';
import { pixelToRem } from '../../helpers/styleUtils';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--white);
  height: 100%;
  padding: ${`${pixelToRem(25)}rem ${pixelToRem(56)}rem ${pixelToRem(32)}rem`};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  text-align: center;

  .challenge {
    &__active {
      display: flex;
      flex-direction: column;

      height: 100%;

      header {
        padding-bottom: ${pixelToRem(25)}rem;
        border-bottom: solid 1px var(--gray-line);

        color: var(--blue);
        font-size: ${pixelToRem(20)}rem;
        font-weight: 600;
      }

      main {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding: ${pixelToRem(38)}rem 0;

        strong {
          margin: ${pixelToRem(24)}rem 0 ${pixelToRem(8)}rem;

          color: var(--title);
          font-size: ${pixelToRem(30)}rem;
          font-weight: 600;
          line-height: 1.3;
        }

        p {
          color: var(--text);
          font-weight: 400;
          line-height: 1.625;
          text-align: center;
        }
      }

      footer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
      }
    }

    &__not-active {
      display: flex;
      flex-direction: column;
      align-items: center;

      strong {
        font-size: ${pixelToRem(24)}rem;
        font-weight: 500;
        line-height: 1.4;
      }

      p {
        display: flex;
        align-items: center;

        margin-top: ${pixelToRem(40)}rem;

        line-height: 1.6;
        text-align: start;

        img {
          height: ${pixelToRem(44)}rem;
          width: ${pixelToRem(32)}rem;

          margin-right: ${pixelToRem(24)}rem;
        }
      }
    }

    &__button {
      display: flex;
      align-items: center;
      justify-content: center;

      background: var(--text);
      height: ${pixelToRem(50)}rem;

      color: var(--white);
      font-weight: 600;
      border-radius: 5px;
      border: 0;
      transition: background-color 0.2s;

      &--succeeded {
        background: var(--green);

        &:hover {
          background: ${shade(0.2, '#4CD62B')};
        }
      }

      &--failed {
        background: var(--red);

        &:hover {
          background: ${shade(0.25, '#E83F5B')};
        }
      }
    }
  }
`;
