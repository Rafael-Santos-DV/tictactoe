import styled from "styled-components";

export const CardPlayer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 260px;
  text-align: center;
  padding: 15px 18px;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.colorCard};
  border-radius: 35%;
  padding: 5px 20px 25px;
  color: ${({ theme: { colors } }) => colors.colorWhite};

  img {
    width: 80px;
  }

  img.profile {
    transform: translateY(-30%);
  }

  span,
  strong {
    padding: 8px 0;
    font-size: 0.8rem;
  }

  strong {
    font-size: 1.3rem;
    color: ${({ theme: { colors } }) => colors.colorYellow};
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 2px dotted ${({ theme: { colors } }) => colors.colorWhite};
  margin-top: 10px;
  padding: 10px;

  span {
    font-size: 1rem;
  }

  span {
    color: ${({ theme: { colors } }) => colors.colorWhite};
  }

  span.winners {
    color: ${({ theme: { colors } }) => colors.colorGreen};
  }
`;
