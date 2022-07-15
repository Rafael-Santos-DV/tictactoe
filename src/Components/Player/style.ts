import styled from "styled-components";

export const CardPlayer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 260px;

  text-align: center;
  padding: 15px 18px;

  @media screen and (max-width: 968px) {
    padding: 8px 10px;
    max-width: 220px;
  }

  @media screen and (max-width: 768px) {
    padding: 15px 18px;
    max-width: 200px;
  }

  @media screen and (max-width: 480px) {
    max-width: 150px;
  }

  @media screen and (max-width: 380px) {
    max-width: 45%;
  }
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
  height: 250px;

  img {
    width: 80px;
    display: none;

    &.image-symbol-circle {
      display: initial;
    }

    &.image-symbol-iconX {
      display: initial;
    }
  }

  img.profile {
    display: initial;
    transform: translateY(-30%);
    border-radius: 50%;
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

  @media screen and (max-width: 768px) {
    max-height: 200px;
    min-height: 200px;

    img {
      width: 40px;
    }

    strong {
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 468px) {
    padding: 0;
  }

  @media screen and (max-width: 380px) {
    img {
      width: 30px;
    }

    span {
      font-size: 0.7rem;
    }

    img.profile {
      transform: translateY(-40%);
      width: 32px;
    }

    strong {
      font-size: 0.8rem;
    }
    padding: 4px;
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

  @media screen and (max-width: 380px) {
    span {
      font-size: 0.8rem;
    }
  }
`;
