import styled from 'styled-components';

export const Container = styled.div`
  background-color: #c4c4c4;
  margin: 0 auto;
  width: 800px;
  height: 350px;
  border-radius: 8px;
  align-items: center;

  .text {
    text-align: center;
  }

  .text h1 {
    font-weight: bold;
    font-size: 20px;
    margin: 20px;
  }

  .contact-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
  }

  .box {
    text-align: center;
    align-items: center;
  }

  .box img {
    width: 42px;
    height: 42px;
  }

  .box h1 {
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
