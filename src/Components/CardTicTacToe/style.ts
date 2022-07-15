import styled, { css } from "styled-components";

export const Box = styled.div`
  width: 395px;
  height: 395px;
  border: 1px dotted ${({ theme: { colors } }) => colors.colorWhite};
  padding: 8px;
  display: flex;
  border-radius: 15px;

  @media screen and (max-width: 968px) {
    width: 350px;
    height: 350px;
  }

  @media screen and (max-width: 380px) {
    width: 200px;
    height: 200px;
  }
`;

export const TicTacToe = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3));
  grid-template-rows: repeat(3, calc(100% / 3));
  border-radius: 15px;
  overflow: hidden;
  border: 1px dotted ${({ theme: { colors } }) => colors.colorWhite};
  position: relative;
`;

export const Button = styled.button<{ gameQuatity: "x" | "o" | "null" }>`
  border: none;
  cursor: pointer;
  border: 1px dotted ${({ theme: { colors } }) => colors.colorWhite};
  width: 100%;
  height: 100%;

  img {
    display: none;
    width: 70px;
  }

  ${({ gameQuatity }) =>
    gameQuatity === "x"
      ? css`
          background-color: ${({ theme: { colors } }) => colors.colorYellow};

          img.xicon {
            display: initial;
          }
        `
      : gameQuatity === "o"
      ? css`
          background-color: ${({ theme: { colors } }) => colors.colorCircle};

          img.circle {
            display: initial;
          }
        `
      : css`
          background-color: ${({ theme: { colors } }) => colors.colorMain};
        `}
`;

export const ContainerWinner = styled.div<{ background: string }>`
  z-index: 99;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-image: url(${({ background }) => background});

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

  gap: 10px;

  img.profile {
    width: 125px;
    height: 125px;
    border-radius: 50%;
    border: 2px dotted ${({ theme: { colors } }) => colors.colorWhite};
    object-fit: cover;
  }

  strong {
    font-size: 1.4rem;
    color: ${({ theme: { colors } }) => colors.colorWhite};
  }

  > span {
    font-size: 1.5rem;
    color: ${({ theme: { colors } }) => colors.colorGreen};
  }

  button {
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    cursor: pointer;

    img {
      width: 45px;
    }

    span {
      color: ${({ theme: { colors } }) => colors.colorWhite};
    }
  }
`;

type LineType = {
  line?:
    | "v-left"
    | "v-center"
    | "v-right"
    | "h-top"
    | "h-center"
    | "h-bottom"
    | "d-bottom-right"
    | "d-left-bottom";
};

export const ContainerLine = styled.div<LineType>`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    animation: animation-line 1.2s ease-in;
  }

  &::before {
    content: "";
    position: absolute;
    height: 2px;
    border: 3px dotted ${({ theme: { colors } }) => colors.colorPink};
    background-color: ${({ theme: { colors } }) => colors.colorMain};
    border-radius: 10%;
    z-index: 99;
    width: calc(100% * ${Math.sqrt(2)});

    ${({ line }) =>
      line === "d-left-bottom" &&
      css`
        transform: rotate(45deg);
      `}

    ${({ line }) =>
      line === "d-bottom-right" &&
      css`
        transform: rotate(135deg);
      `}
  }

  ${({ line }) =>
    line !== "d-bottom-right" &&
    line !== "d-left-bottom" &&
    css`
      display: grid;
      grid-template-columns: repeat(3, calc(100% / 3));
      grid-template-rows: repeat(3, calc(100% / 3));
      place-items: center;
    `}

  ${({ line }) =>
    line === "h-top" &&
    css`
      &::before {
        width: 100%;
        position: relative;
        grid-column: 1 / span 3;
        grid-row: 1;
      }
    `}

  &::before {
    animation: animation-line 1.2s ease-in;
  }

  ${({ line }) =>
    line === "h-center" &&
    css`
      &::before {
        width: 100%;
        position: relative;
        grid-column: 1 / span 3;
        grid-row: 2;
        /* transform: rotate(135deg); */
      }
    `}

  ${({ line }) =>
    line === "h-bottom" &&
    css`
      &::before {
        width: 100%;
        position: relative;
        grid-column: 1 / span 3;
        grid-row: 3;
        /* transform: rotate(135deg); */
      }
    `}

    ${({ line }) =>
    line === "h-bottom" &&
    css`
      &::before {
        width: 100%;
        position: relative;
        grid-column: 1 / span 3;
        grid-row: 3;
        /* transform: rotate(135deg); */
      }
    `}

    ${({ line }) =>
    line === "v-left" &&
    css`
      &::before {
        width: 5px;
        position: relative;
        grid-column: 1 / span 1;
        grid-row: 1 / span 3;
        height: 100%;
      }
    `}

    ${({ line }) =>
    line === "v-center" &&
    css`
      &::before {
        width: 5px;
        position: relative;
        grid-column: 2 / 2;
        grid-row: 1 / span 3;
        height: 100%;
      }
    `}

    ${({ line }) =>
    line === "v-center" &&
    css`
      &::before {
        width: 5px;
        position: relative;
        grid-column: 2 / 2;
        grid-row: 1 / span 3;
        height: 100%;
      }
    `}

    ${({ line }) =>
    line === "v-right" &&
    css`
      &::before {
        width: 5px;
        position: relative;
        grid-column: 3 / 3;
        grid-row: 1 / span 3;
        height: 100%;
      }
    `}

  @keyframes animation-line {
    0% {
      width: 0;
      height: 0;
    }
  }
`;

export const ContainerDraw = styled.div<{ background: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  background-image: url(${(props) => props.background});

  div {
    display: flex;
    gap: 30px;

    img {
      max-width: 100px;
      border-radius: 50%;
    }
  }

  span {
    color: ${({ theme: { colors } }) => colors.colorYellow};
    font-size: 1rem;
  }

  button {
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    span {
      color: ${({ theme: { colors } }) => colors.colorWhite};
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 380px) {
    div {
      img {
        max-width: 40px;
      }
    }
    button {
      img {
        max-width: 50px;
      }
    }
  }
`;
