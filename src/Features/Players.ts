import { createSlice } from "@reduxjs/toolkit";
import Register from "../Actions/PlayersActions";

type TypePlayer = {
  name: string;
  character: string;
  thumbnail: string;
  symbol: "null" | "x" | "o";
  id: number;
  winners: number;
};

type StateType = {
  isRunning: boolean;
  rowID: number;
  playOne: TypePlayer;
  playTwo: TypePlayer;
};

const initialState: StateType = {
  isRunning: false,
  rowID: 1,
  playOne: {
    name: "",
    character: "",
    thumbnail: "",
    symbol: "null",
    id: 1,
    winners: 0,
  },
  playTwo: {
    name: "",
    character: "",
    thumbnail: "",
    symbol: "null",
    id: 2,
    winners: 0,
  },
};

const Players = createSlice({
  name: "Players",
  initialState,
  reducers: {
    Register,
  },
});

export const { Register: register } = Players.actions;

export default Players.reducer;
