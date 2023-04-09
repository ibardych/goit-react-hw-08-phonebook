import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';

export const Contact = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px 8px 0px;
  border-radius: 30px;
  cursor: default;
  ${transition('box-shadow')};

  & span {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }

  & strong {
    color: ${colors.default};
    margin-left: 10px;
  }

  & span::before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: #838383;
    margin-right: 20px;
    position: relative;
    z-index: 0;
  }

  &:hover span::before {
    background-color: ${colors.color1};
    animation: pulsate 1s ease-out infinite;
  }

  @keyframes pulsate {
    0% {
      transform: scale(0.7);
      opacity: 1;
    }
    100% {
      transform: scale(3);
      opacity: 0;
    }
  }

  & button {
    flex-basis: 100px;
    opacity: 0;
    ${transition('transform', 'box-shadow', 'border-radius', 'opacity')};
    margin: 0;
  }

  &:hover {
    box-shadow: inset 0px 0px 10px 0px #ffffffb1;

    & button {
      opacity: 1;
    }
  }
`;
