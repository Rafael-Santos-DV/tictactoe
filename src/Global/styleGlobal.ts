import { createGlobalStyle } from "styled-components";

export const StylesGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Peralta', cursive, sans-serif;

  }


  html, body, #root {
    height: 100%;
    background-color: ${(props) => props.theme.colors.colorMain};
  }

`;
