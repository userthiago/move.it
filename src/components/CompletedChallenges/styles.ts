import styled from 'styled-components';
import { pixelToRem } from '../../helpers/styleUtils';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: ${pixelToRem(56)}rem 0;
  padding-bottom: ${pixelToRem(16)}rem;
  border-bottom: 1px solid #d7d8da;

  font-weight: 500;

  span:first-child {
    font-size: ${pixelToRem(18)}rem;
  }

  span:last-child {
    font-size: ${pixelToRem(24)}rem;
  }
`;
