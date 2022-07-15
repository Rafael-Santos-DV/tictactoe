import React, { useState } from "react";
import {
  Box,
  Button,
  ContainerDraw,
  ContainerLine,
  ContainerWinner,
  TicTacToe,
} from "./style";

import circle from "../../Assets/circle.svg";
import xicon from "../../Assets/xicon.svg";
import restart from "../../Assets/restart.svg";
import winnerImage from "../../Assets/winner.jpg";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { plays, restartPlay } from "../../Features/Plays";
import {
  addPlays,
  addWinner,
  restartGame,
  createDraw,
} from "../../Features/Players";
import { Delay } from "../../Sagas/sagas";
import { sagaMiddeware } from "../../Store/Store";

type LineType =
  | "v-left"
  | "v-center"
  | "v-right"
  | "h-top"
  | "h-center"
  | "h-bottom"
  | "d-bottom-right"
  | "d-left-bottom";

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
  const { playOne, playTwo, hasWinner, winner, delayFinished, hasDraw } =
    useAppSelector((state) => state.Players);

  const [getPosition, setPosition] = useState<LineType>();

  const dispatch = useAppDispatch();

  function handleVerifyWinner(play: typeof playOne, button: string) {
    // match
    const htop = ["one", "two", "three"];
    const hcenter = ["four", "five", "six"];
    const hbottom = ["seven", "eight", "nine"];

    const vleft = ["one", "four", "seven"];
    const vcenter = ["two", "five", "eight"];
    const vright = ["three", "six", "nine"];

    const dbottomRight = ["seven", "five", "three"];
    const dleftBottom = ["one", "five", "nine"];

    const allMatch = [
      htop, // 0 - horizontal top
      hcenter, // 1 -horizontal center
      hbottom, // 2 -horizontal bottom
      vleft, // 3 - vertical left
      vcenter, // 4 - vertical center
      vright, // 5 -vertical right
      dbottomRight, // 6 - diagonal bottom-right
      dleftBottom, // 7 - diagonal left - bottom
    ];

    allMatch.forEach((match, position) => {
      const result = match.every((prev) =>
        [...play.plays, button].includes(prev)
      );
      if (result) {
        dispatch(addWinner({ id: play.id }));

        switch (position) {
          case 0: {
            setPosition("h-top");
            break;
          }
          case 1:
            setPosition("h-center");
            break;

          case 2: {
            setPosition("h-bottom");
            break;
          }
          case 3: {
            setPosition("v-left");
            break;
          }
          case 4: {
            setPosition("v-center");
            break;
          }
          case 5: {
            setPosition("v-right");
            break;
          }
          case 6: {
            setPosition("d-bottom-right");
            break;
          }
          case 7: {
            setPosition("d-left-bottom");
            break;
          }
        }

        sagaMiddeware.run(Delay);
      }
    });
  }

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

    if (playTwo.plays.includes(button) || playOne.plays.includes(button)) {
      return;
    }

    // player one's turn
    if (playOne.id === yourTime) {
      dispatch(addPlays({ button, id: playOne.id }));

      dispatch(plays({ button, symbol: playOne.symbol, id: playTwo.id }));
      handleVerifyWinner(playOne, button);

      // teste
      if ([...playOne.plays, ...playTwo.plays, button].length === 9) {
        dispatch(createDraw());
      }
      return;
    }

    // player two's turn
    if (playTwo.id === yourTime) {
      dispatch(addPlays({ button, id: playTwo.id }));
      dispatch(plays({ button, symbol: playTwo.symbol, id: playOne.id }));

      handleVerifyWinner(playTwo, button);

      // teste
      if ([...playOne.plays, ...playTwo.plays, button].length === 9) {
        console.log([...playOne.plays, ...playTwo.plays, button].length);
        dispatch(createDraw());
      }
      return;
    }
  }

  function handleResetGame() {
    dispatch(restartGame());
    dispatch(restartPlay());
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

        {hasWinner && <ContainerLine line={getPosition} />}

        {hasWinner && delayFinished && (
          <ContainerWinner background={winnerImage}>
            <img src={winner.thumbnail} alt="Profile" className="profile" />
            <strong>{winner.name}</strong>
            <span>Você venceu!</span>
            <button onClick={() => handleResetGame()}>
              <img src={restart} alt="Restart" />
              <span>Nova Partida</span>
            </button>
          </ContainerWinner>
        )}

        {hasDraw && (
          <ContainerDraw background={winnerImage}>
            <div>
              <img src={playOne.thumbnail} alt="Profile" className="profile" />
              <img src={playTwo.thumbnail} alt="Profile" className="profile" />
            </div>

            <span>Deu empate!</span>

            <button onClick={() => handleResetGame()}>
              <img src={restart} alt="Restart" />
              <span>Nova Partida</span>
            </button>
          </ContainerDraw>
        )}
      </TicTacToe>
    </Box>
  );
};
