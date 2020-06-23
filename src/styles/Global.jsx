import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body{
  background-color: black;
  font-family: 'Roboto', sans-serif;
}
  * {
      margin: 0;
      border: 0;
      box-sizing: border-box;
  }

  li{
    list-style-type:none;
    cursor: pointer;
  }
`;
