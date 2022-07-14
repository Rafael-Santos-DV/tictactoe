import React from "react";
import { Box, CardPlayer, Footer } from "./style";
import iconCircle from "../../Assets/circle.svg";
import iconX from "../../Assets/xicon.svg";

interface PlayerTypeProps {
  thumbnail: string;
  player: number;
  name: string;
  symbol: string;
  winners: number;
  className?: string;
}

export const Player: React.FC<PlayerTypeProps> = ({
  name,
  player,
  symbol,
  thumbnail,
  winners,
  className,
}) => {
  return (
    <CardPlayer className={className}>
      <Box>
        <img src={thumbnail} alt="Perfil" className="profile" />
        <span>Player {player}</span>
        <strong>{name}</strong>

        <img
          src={iconCircle}
          alt="O"
          className={symbol === "o" ? "image-symbol-circle" : ""}
        />
        <img
          src={iconX}
          alt="X"
          className={symbol === "x" ? "image-symbol-iconX" : ""}
        />
      </Box>

      <Footer>
        <span className="winners">Vitórias</span>
        <span>{winners}</span>
      </Footer>
    </CardPlayer>
  );
};
