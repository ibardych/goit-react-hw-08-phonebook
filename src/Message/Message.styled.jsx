import styled from '@emotion/styled';
import { colors } from 'constants';

export const MessageStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  & div {
    color: #333;
    border-radius: 5px;
    padding: 9px 24px 7px 24px;
    border-left: 2px solid ${colors.color2};
    border-right: 2px solid ${colors.color2};
    font-size: 18px;
    background-image: repeating-linear-gradient(
      135deg,
      rgb(0 0 0 / 0.01),
      rgb(0 0 0 / 0.01) 5px,
      rgba(255, 0, 38, 0.05) 5px,
      rgba(255, 0, 38, 0.05) 10px
    );
  }
`;
