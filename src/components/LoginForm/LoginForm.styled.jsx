import styled from '@emotion/styled';

export const LoginFormStyled = styled.div`
  margin: 0 auto;
  width: 500px;
  max-width: 100%;
  box-shadow: 0px 0px 20px 10px rgba(255, 255, 255, 1);
  background: linear-gradient(200deg, #f7f7f7 0%, #ededed 100%);
  padding: 30px;
  border-radius: 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    margin: -5px;
    height: calc(100% + 10px);
    width: calc(100% + 10px);
    border: 1px solid #00000021;
    border-radius: 24px;
    z-index: 0;
  }
`;
