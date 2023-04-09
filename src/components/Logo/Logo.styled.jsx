import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { colors } from 'constants';

export const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  padding: 30px 0 30px 0;
  font-size: calc(32px + 1.5vw);
  color: ${colors.color2};
  position: relative;
  color: #fff;
  user-select: none;

  & a {
    font-family: 'Kodchasan', sans-serif;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    padding: 20px;
    border-radius: 20px;
    backdrop-filter: blur(10px);

    @media screen and (max-width: ${mediaSizes.tablet}) {
      background-color: rgba(0, 0, 0, 0.1);

      & span,
      & div {
        color: #fff !important;
      }
    }
  }

  & span {
    display: block;
    font-weight: 400;
    color: ${colors.color1};
    margin-bottom: 5px;
    position: relative;

    &::before {
      content: '';
      width: 34px;
      height: 1px;
      background-color: ${colors.color1};
      position: absolute;
      left: 0px;
      bottom: -5px;
      border-radius: 5px;
    }

    &::after {
      content: '';
      width: 34px;
      height: 1px;
      background-color: ${colors.color1};
      position: absolute;
      right: 0px;
      bottom: -5px;
      border-radius: 5px;
    }
  }

  & div {
    font-weight: 300;
    color: ${colors.color1};
    font-size: 20px;
    letter-spacing: 4px;
  }
`;
