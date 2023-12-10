import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  };

  body {
    --text-light: #8B6990;
    --text-dark: #301534;
    --text-hover: #AD28EB;
    --background: #F8EEFF;
    font-family: 'Work Sans', sans-serif;
  }
`

export default GlobalStyles;