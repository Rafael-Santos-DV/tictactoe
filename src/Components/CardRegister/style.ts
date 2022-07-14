import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  margin: 0 auto;

  h2 {
    font-size: 1.5rem;
    color: ${({ theme: { colors } }) => colors.colorYellow};
  }

  p {
    font-size: 0.8rem;
    color: ${({ theme: { colors } }) => colors.colorWhite};
    padding: 10px 0;
  }

  input {
    padding: 15px;
    border: none;

    &::placeholder {
      color: #000;
      font-weight: bold;
      text-align: center;
      font-size: 1rem;
    }

    border-radius: 10px;
  }

  button {
    padding: 15px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.colorWhite};
    background-color: ${({ theme: { colors } }) => colors.colorPink};
  }
`;

export const HaveCharacter = styled.footer`
  width: 100%;

  p.character-sucess {
    color: ${({ theme: { colors } }) => colors.colorGreen};
  }

  p.character-failed {
    color: ${({ theme: { colors } }) => colors.colorRed};
  }
`;

export const InitGame = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;

  span {
    color: ${({ theme: { colors } }) => colors.colorYellow};
    font-size: 1.2rem;
  }

  span.circle-animate {
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    animation: animate-circle 1s infinite alternate;
    margin-left: 4px;
  }

  span:nth-of-type(2) {
    background-color: ${({ theme: { colors } }) => colors.colorYellow};
    animation-delay: 1s;
  }

  span:nth-of-type(3) {
    background-color: ${({ theme: { colors } }) => colors.colorGreen};
    animation-delay: 1.2s;
  }

  span:nth-of-type(4) {
    background-color: ${({ theme: { colors } }) => colors.colorWhite};
    animation-delay: 1.3s;
  }

  @keyframes animate-circle {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(2);
    }

    100% {
      transform: scale(1);
    }
  }
`;
