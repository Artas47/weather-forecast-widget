import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    ::-webkit-scrollbar,
    ::-webkit-scrollbar-thumb {
      height: 4px;
      background-color: #cfcfcf;
      border-radius: 1.5rem;
      opacity: 1;
      -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
    }
    ::-webkit-scrollbar-thumb {        
      box-shadow: inset 0 0 0 10px;
    }
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;
    @media only screen and (max-width: 75em) {
      font-size: 55%;
    }
    @media only screen and (max-width: 62.5em) {
      font-size: 50%;
    }
    @media only screen and (max-width: 37.5em) {
      font-size: 47.5%;
    }
  }
  body {
    font-family: 'Roboto', sans-serif;
    width: 100vw;
    height: 100vh;
  }
`;
