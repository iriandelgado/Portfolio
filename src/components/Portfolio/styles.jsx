import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;

  .port {
    margin-top: 50px;
    text-align: center;
  }

  .port h1 {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 30px;
  }

  .line {
    border: 5px solid #c4c4c4;
    margin: 40px;
  }

  h1 {
    color: white;
  }

  .img-box {
    width: 800px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin: 0 auto;
  }

  .img-box img {
    border-radius: 8px;
    width: 243px;
    height: 335px;
  }
`;
