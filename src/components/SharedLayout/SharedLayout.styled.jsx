import styled from '@emotion/styled';

export const SharedLayoutStyled = styled.div`
  margin: 0 auto;
  width: 1080px;
  max-width: 100%;
  padding: 20px;

  & .main-container {
    min-height: calc(100vh - 860px);
  }
`;
