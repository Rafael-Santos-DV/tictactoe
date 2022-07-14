import React, { useState } from "react";
import { BoxImage, Container, Header, Main } from "./style";
import logo from "../Assets/logo.svg";
import { YourTime } from "../Components/YourTime/YourTime";
import { Welcome } from "../Components/Welcome/Welcome";
import { CardRegister } from "../Components/CardRegister/CardRegister";
import { Player } from "../Components/Player/Player";
import { CardTicTacToe } from "../Components/CardTicTacToe/CartTicTacToe";
import { useAppSelector } from "../hooks/hooks";

const Game: React.FC = () => {
  const { playOne, isRunning, playTwo, rowID } = useAppSelector(
    (state) => state.Players
  );

  return (
    <Container>
      <Header>
        <BoxImage>
          <img src={logo} alt="TicTacToe" />
        </BoxImage>

        {isRunning && (
          <YourTime name={playOne.name} character={playOne.character} id={1} />
        )}

        {!isRunning && <Welcome />}
      </Header>

      <Main>
        {!isRunning && <CardRegister />}

        {isRunning && (
          <Player
            className="animate-show-profile"
            name={playOne.name}
            player={playOne.id}
            winners={playOne.winners}
            thumbnail={playOne.thumbnail}
            symbol={playOne.symbol}
          />
        )}

        {isRunning && (
          <CardTicTacToe className="card-tic-tac-toe animate-card" />
        )}

        {isRunning && (
          <Player
            className="animate-show-profile"
            name={playTwo.name}
            player={playTwo.id}
            winners={playTwo.winners}
            thumbnail={playTwo.thumbnail}
            symbol={playTwo.symbol}
          />
        )}
      </Main>
    </Container>
  );
};

export default Game;
