import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { BoxText } from "./style";

export const YourTime: React.FC = () => {
  const { playOne, playTwo } = useAppSelector((state) => state.Players);

  const { yourTime } = useAppSelector((state) => state.Plays);

  return (
    <BoxText className={yourTime === 1 ? "player-one" : "player-two"}>
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
    </BoxText>
  );
};
