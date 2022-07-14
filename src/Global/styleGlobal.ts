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

  .animate-show-profile {
    animation: show-profile 1s backwards ease-in;
  }



  @keyframes show-profile {
    0% {
      transform: translateX(-100%);
    }

    50% {
      transform: translateX(10%);
    }

    100% {
      transform: translateX(0%);
    }
  }

  .animate-card {
    animation: animate-show-card 1s alternate ease-in;
  }

  @keyframes animate-show-card {
    0%{
      transform: translateY(-100%)
    }

    50% {
      transform: translateY(0%)
    }

    70% {
      transform: translateY(-20%)
    }

    100% {
      transform: translateY(0%)
    }
  }



`;
