import styled from "styled-components";

export const BoxText = styled.div`
  p {
    font-size: 1.8rem;
    color: ${({ theme: { colors } }) => colors.colorYellow};
  }
`;
