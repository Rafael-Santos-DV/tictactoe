import React from "react";
import { Box, CardPlayer, Footer } from "./style";
import iconCircle from "../../Assets/circle.svg";
import iconX from "../../Assets/xicon.svg";

export const Player: React.FC = () => {
  return (
    <CardPlayer>
      <Box>
        <img src={iconCircle} alt="Perfil" className="profile" />
        <span>Player 1</span>
        <strong>Leal</strong>
        <img src={iconX} alt="Star" />
      </Box>

      <Footer>
        <span className="winners">Vitórias</span>
        <span>2</span>
      </Footer>
    </CardPlayer>
  );
};
