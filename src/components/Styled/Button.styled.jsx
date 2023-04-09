import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';

export const Button = styled.button`
  border: none;
  flex-basis: 50%;
  border-radius: 10px;
  background-color: ${props => colors[props.design || 'color1']};
  padding: 8px 20px 6px 20px;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  position: relative;
  box-shadow: 8px 8px 16px #c2c2c2, -8px -8px 16px #f9f9f9;
  ${transition('transform', 'box-shadow')};

  &:hover {
    transform: scale(1.1);
    box-shadow: 10px 10px 16px #c2c2c2, -8px -8px 16px #f9f9f9;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 1.5px;
    left: -6px;
    width: 0;
    height: 0;
    border-top: 13.5px solid transparent;
    border-bottom: 13.5px solid transparent;
    border-right: 13.5px solid ${props => colors[props.design || 'color1']};
    ${transition('border', 'left', 'right')}
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 1.5px;
    right: -6px;
    width: 0;
    height: 0;
    border-top: 13.5px solid transparent;
    border-bottom: 13.5px solid transparent;
    border-left: 13.5px solid ${props => colors[props.design || 'color1']};
    ${transition('border', 'left', 'right')}
  }

  &.totop {
    position: fixed;
    bottom: 30px;
    right: 30px;
    border-radius: 50px;
    font-size: 26px;
    width: 50px;
    height: 50px;
    padding: 0;

    & svg {
      position: relative;
      bottom: -2px;
    }

    &::before,
    &::after {
      display: none;
    }
  }
`;
