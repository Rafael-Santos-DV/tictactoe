import React from "react";
import { Container } from "./style";

export const Welcome: React.FC = () => {
  return (
    <Container>
      <h1>Bem vindo ao TicTacToe</h1>
      <p>Jogador 1 e Jogador 2, informe seu personagem.</p>
    </Container>
  );
};
