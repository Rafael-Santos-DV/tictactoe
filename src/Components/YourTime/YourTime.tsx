import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { BoxText } from "./style";

export const YourTime: React.FC = () => {
  const { playOne, playTwo, yourTime } = useAppSelector(
    (state) => state.Players
  );

  return (
    <BoxText className={playOne.id === yourTime ? "player-one" : "player-two"}>
      {yourTime === 0 ? (
        <div>Esperando próxima partida!</div>
      ) : (
        <>
          <p>
            É sua vez:
            <strong>{yourTime === 1 ? playOne.name : playTwo.name}</strong>
          </p>
          <p>
            Personagem:
            <strong>
              {yourTime === 1 ? playOne.character : playTwo.character}
            </strong>
          </p>
        </>
      )}
    </BoxText>
  );
};
