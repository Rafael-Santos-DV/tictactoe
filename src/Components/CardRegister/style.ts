import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;

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
