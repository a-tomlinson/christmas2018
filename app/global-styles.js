import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: black;
    color: #efefef;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyle;
