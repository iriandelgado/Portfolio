import styled from 'styled-components';

export const Container = styled.div`
  background-color: #c4c4c4;
  width: 800px;
  height: 400px;
  border-radius: 8px;

  margin: 0 auto;

  h1 {
    font-size: 20px;
  }

  .about-box {
    margin-top: 150px;
    display: flex;
  }

  .box {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 60px;
  }
  .box p {
    margin-top: 20px;
  }

  img {
    width: 350px;
    height: 400px;
    border-radius: 8px 0 0 8px;
  }
`;
