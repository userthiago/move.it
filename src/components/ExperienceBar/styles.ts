import styled from 'styled-components';
import { pixelToRem } from '../../helpers/styleUtils';

interface BarProps {
  experience: number;
}

export const Container = styled.header<BarProps>`
  display: flex;
  align-items: center;

  span {
    font-size: ${pixelToRem(14)}rem;
  }

  .bar {
    position: relative;
    flex: 1;

    background: var(--gray-line);
    height: 4px;
    margin: 0 ${pixelToRem(24)}rem;
    border-radius: 4px;

    &__progression {
      background: var(--green);
      width: ${({ experience }) => experience}%;
      height: 4px;
      border-radius: 4px;
      transition: width 0.2s;
    }

    &__current-experience {
      position: absolute;
      top: 12px;
      left: ${({ experience }) => experience}%;
      transform: translateX(-50%);
      transition: left 0.2s;
    }
  }
`;
