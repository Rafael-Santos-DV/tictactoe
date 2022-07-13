import React from "react";
import { BoxImage, Container, Header, Main } from "./style";
import logo from "../Assets/logo.svg";
import { WinnerDesktop } from "../Components/WinnerDesktop/WinnerDesktop";
import { Welcome } from "../Components/Welcome/Welcome";
import { CardRegister } from "../Components/CardRegister/CardRegister";
import { Player } from "../Components/Player/Player";
import { CardTicTacToe } from "../Components/CardTicTacToe/CartTicTacToe";

const Game: React.FC = () => {
  return (
    <Container>
      <Header>
        <BoxImage>
          <img src={logo} alt="TicTacToe" />
        </BoxImage>
        <WinnerDesktop />
        {/* <Welcome /> */}
      </Header>

      <Main>
        {/* <CardRegister /> */}

        <Player />

        <CardTicTacToe />

        <Player />
      </Main>
    </Container>
  );
};

export default Game;
