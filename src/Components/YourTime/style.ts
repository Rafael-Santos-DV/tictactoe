import styled from "styled-components";

export const BoxText = styled.div`
  > div {
    color: ${({ theme: { colors } }) => colors.colorWhite};
    font-size: 1rem;
  }
  p {
    font-size: 1.2rem;
    color: ${({ theme: { colors } }) => colors.colorYellow};
  }

  &.player-one {
    strong {
      padding-left: 10px;

      color: ${({ theme: { colors } }) => colors.colorGreen};
    }
  }

  &.player-two {
    strong {
      padding-left: 10px;
      color: ${({ theme: { colors } }) => colors.colorPink};
    }
  }
`;
