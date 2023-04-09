import styled from '@emotion/styled';
import { transition } from 'helpers';

export const NavigationStyled = styled.ul`
  margin: 0 auto;
  width: 500px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 100;
  padding-top: 40px;
  color: #757575;
  margin-bottom: 100px;
  display: flex;
  gap: 40px;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 5px;
    background-color: #333;
    border-radius: 20px;
    position: absolute;
    bottom: 13px;
  }

  & li {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: 2.5px;
      left: -10px;
      width: 0;
      height: 0;
      border-top: 13.5px solid transparent;
      border-bottom: 13.5px solid transparent;
      border-right: 13.5px solid #333;
      ${transition('border', 'left', 'right')}
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 2.5px;
      right: -10px;
      width: 0;
      height: 0;
      border-top: 13.5px solid transparent;
      border-bottom: 13.5px solid transparent;
      border-left: 13.5px solid #333;
      ${transition('border', 'left', 'right')}
    }

    &:hover {
      &::before {
        content: '';
        left: -13px;
      }

      &::after {
        content: '';
        right: -13px;
      }
    }
  }
`;
