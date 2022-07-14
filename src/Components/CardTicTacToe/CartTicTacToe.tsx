import React, { useState } from "react";
import {
  Box,
  Button,
  ContainerLine,
  ContainerWinner,
  TicTacToe,
} from "./style";

import circle from "../../Assets/circle.svg";
import xicon from "../../Assets/xicon.svg";
import restart from "../../Assets/restart.svg";
import winner from "../../Assets/winner.jpg";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { plays } from "../../Features/Plays";
import { addPlays } from "../../Features/Players";

type TypeButton = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];

const allButtons = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
] as TypeButton;

interface CardType {
  className?: string;
}

export const CardTicTacToe: React.FC<CardType> = ({ className }) => {
  const { buttons, yourTime } = useAppSelector((state) => state.Plays);
  const { playOne, playTwo } = useAppSelector((state) => state.Players);

  console.log(playOne.plays, playTwo.plays);

  const dispatch = useAppDispatch();

  function handlePlay(button: string) {
    // first play for player one
    if (playOne.symbol === "x" && yourTime === 0) {
      dispatch(addPlays({ button, id: playOne.id }));
      dispatch(plays({ button, symbol: "x", id: playTwo.id }));
      return;
    }

    // first play for player two
    if (playTwo.symbol === "x" && yourTime === 0) {
      dispatch(addPlays({ button, id: playTwo.id }));
      dispatch(plays({ button, symbol: "x", id: playOne.id }));
      return;
    }

    // player one's turn
    if (playOne.id === yourTime) {
      dispatch(addPlays({ button, id: playOne.id }));

      dispatch(plays({ button, symbol: playOne.symbol, id: playTwo.id }));
      return;
    }

    // player two's turn
    if (playTwo.id === yourTime) {
      dispatch(addPlays({ button, id: playTwo.id }));
      dispatch(plays({ button, symbol: playTwo.symbol, id: playOne.id }));
      return;
    }
  }

  return (
    <Box className={className}>
      <TicTacToe>
        {allButtons.map((button) => (
          <Button
            gameQuatity={buttons[button]}
            key={button}
            onClick={() => handlePlay(button)}
          >
            <img src={circle} alt="circle" className="circle" loading="lazy" />
            <img src={xicon} alt="x" className="xicon" loading="lazy" />
          </Button>
        ))}

        {/* <ContainerLine line="v-right" /> */}

        <ContainerWinner background={winner}>
          <img src={winner} alt="Profile" className="profile" />
          <strong>Leal</strong>
          <span>Você venceu!</span>
          <button>
            <img src={restart} alt="Restart" />
            <span>Nova Partida</span>
          </button>
        </ContainerWinner>
      </TicTacToe>
    </Box>
  );
};
