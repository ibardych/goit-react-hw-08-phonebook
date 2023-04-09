import styled from '@emotion/styled';
import { mediaSizes } from 'constants';

export const PhoneBookStyled = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 40px;
  gap: 40px;

  @media screen and (max-width: ${mediaSizes.desktop}) {
    flex-direction: column;
    align-items: center;
  }
`;
