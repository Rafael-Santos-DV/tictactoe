import styled, { css } from "styled-components";

export const Box = styled.div`
  width: 100%;
  max-width: 400px;
  border: 1px dotted ${({ theme: { colors } }) => colors.colorWhite};
  padding: 8px;
  display: flex;
  border-radius: 15px;
`;

export const TicTacToe = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3));
  grid-template-rows: repeat(3, 121px);
  border-radius: 15px;
  overflow: hidden;
  border: 1px dotted ${({ theme: { colors } }) => colors.colorWhite};
`;

export const Button = styled.button<{ gameQuatity: "x" | "o" | "null" }>`
  border: none;
  cursor: pointer;
  border: 1px dotted ${({ theme: { colors } }) => colors.colorWhite};

  img {
    display: none;
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
