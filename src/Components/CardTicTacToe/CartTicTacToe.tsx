import React, { useState } from "react";
import { Box, Button, TicTacToe } from "./style";

import circle from "../../Assets/circle.svg";
import xicon from "../../Assets/xicon.svg";

const lista = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

export const CardTicTacToe: React.FC = () => {
  return (
    <Box>
      <TicTacToe>
        {lista.map((button) => (
          <Button gameQuatity={"null"} key={button}>
            <img src={circle} alt="circle" className="circle" loading="lazy" />
            <img src={xicon} alt="x" className="xicon" loading="lazy" />
          </Button>
        ))}
      </TicTacToe>
    </Box>
  );
};
