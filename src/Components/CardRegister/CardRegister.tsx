import React from "react";
import { Container, HaveCharacter } from "./style";

export const CardRegister: React.FC = () => {
  return (
    <Container>
      <h2>Player 2</h2>

      <input type="text" name="" placeholder="Seu nome" />
      <p>Abaixo, informe o nome do seu personagem da Marvel favorito</p>
      <input type="text" name="" placeholder="Personagem da Marvel" />

      <button>Confirmar</button>

      <HaveCharacter>
        <p className="character-sucess">Personagem encontrado</p>
        {/* <p className="character-failed">
          Personagem não encontrado, por favor, informe um personagem válido.
        </p> */}
      </HaveCharacter>
    </Container>
  );
};
