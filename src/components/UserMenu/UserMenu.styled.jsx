import styled from '@emotion/styled';

export const UserMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .name {
    font-size: 40px;
    font-family: 'Kodchasan', sans-serif;
    margin-bottom: 10px;
  }

  & .container {
    display: flex;
    gap: 30px;
    justify-content: flex-start;
    align-items: center;

    & button {
      margin: 0;
      flex-basis: auto;
    }
  }

  & .email {
    font-size: 20px;
  }
`;
