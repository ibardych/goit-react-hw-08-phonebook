import styled from '@emotion/styled';
import { transition } from 'helpers';

export const SectionContainer = styled.section`
  width: 550px;
  max-width: 100%;
  height: auto;
  box-shadow: 0px 0px 20px 10px rgba(255, 255, 255, 1);
  background: linear-gradient(180deg, #ededed 0%, #ededed 100%);
  border-radius: 12px;
  padding: 1px;
  backdrop-filter: blur(2px);
  position: relative;
  padding: 24px;
  ${transition('height')}
  min-height: 400px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    margin: -5px;
    height: calc(100% + 10px);
    width: calc(100% + 10px);
    border: 1px solid #00000021;
    border-radius: 16px;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: -0px;
    right: 0px;
    margin: -5px;
    height: calc(100% + 10px);
    width: calc(100% + 10px);
    border-top: 10px solid #333;
    border-radius: 13px;
    z-index: -1;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 30px;
`;
