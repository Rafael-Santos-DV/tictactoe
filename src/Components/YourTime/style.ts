import styled from "styled-components";

export const BoxText = styled.div`
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
