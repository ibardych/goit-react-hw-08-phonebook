import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  margin-bottom: 70px;

  & .logo {
    margin: 0 auto;
    width: 100px;
    display: block;
    margin-top: 40px;
    margin-bottom: -40px;
    position: relative;
    z-index: 1;

    & img {
      width: 100%;
      display: block;
    }
  }
`;
