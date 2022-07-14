import React from "react";
import { BoxText } from "./style";

export const YourTime: React.FC<{
  name: string;
  character: string;
  id: number;
}> = ({ name, character, id }) => {
  return (
    <BoxText className={id === 1 ? "player-one" : "player-two"}>
      <p>
        É sua vez: <strong>{name}</strong>
      </p>
      <p>
        Personagem: <strong>{character}</strong>
      </p>
    </BoxText>
  );
};
