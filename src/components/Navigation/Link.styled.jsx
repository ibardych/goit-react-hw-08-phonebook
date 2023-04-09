import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';
import { NavLink } from 'react-router-dom';

export const LinkStyled = styled(NavLink)`
  color: #f5f5f5;
  font-size: 20px;
  padding: 5px 10px;
  position: relative;
  background-color: #333;
  border-radius: 5px;
  height: 34px;
  display: block;
  ${transition('opacity')};

  &::before {
    content: '';
    position: absolute;
    bottom: -0px;
    left: 0;
    width: 100%;
    height: 10px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px 10px #00000085;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 20px;
    left: -10%;
    width: 120%;
    height: 3px;
    border-radius: 50%;
    box-shadow: 0px 0px 4px 4px #ffffff8d;
    z-index: 1;
    background-color: #ffffff8d;
  }

  &.active {
    color: #00f8cb;
    box-shadow: 0px 2px 15px 0px #00f8cb56;
    z-index: 1;
  }
`;
