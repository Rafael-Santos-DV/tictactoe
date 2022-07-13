import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  grid-column: 2 / span 3;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    color: ${({ theme: { colors } }) => colors.colorYellow};
  }

  p {
    color: ${({ theme: { colors } }) => colors.colorWhite};
  }
`;
