import { createGlobalStyle } from "styled-components";

export const StylesGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

  }

  html, body {
    background-color: #606770;

  }

  html, body, #root {
    height: 100%;
  }

`;
