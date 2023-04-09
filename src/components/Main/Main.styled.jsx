import styled from '@emotion/styled';

export const MainStyled = styled.div`
  border: 2px solid #fff;
  border-radius: 20px;
  padding: 50px 30px;
  background-color: #ffffff3b;
  position: relative;
  z-index: -1;
  box-shadow: -40px 0px 50px -40px rgba(0, 0, 0, 0.1),
    40px 0px 50px -40px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    height: 10px;
    width: 50%;
    background-color: #f2f2f2;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    box-shadow: 0px 0px 50px 40px #f2f2f2;
  }

  &::after {
    content: '';
    height: 10px;
    width: 50%;
    background-color: #e6e6e6;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    box-shadow: 0px 0px 50px 40px #e6e6e6;
  }

  & h1 {
    font-size: 30px;
    text-align: center;
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
    margin-bottom: 50px;
    font-family: 'Kodchasan', sans-serif;
    line-height: 1.8;
  }

  & p {
    margin-bottom: 20px;
    color: #5a5a5a;
    font-weight: 200;
    line-height: 1.8;
    position: relative;
    z-index: 1;
    font-size: 18px;
    text-align: center;

    &:last-child {
      margin-bottom: 0px;
    }

    & strong {
      color: #000;
      font-weight: 600;
    }
  }
`;
