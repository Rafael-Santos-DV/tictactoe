import { createSlice } from "@reduxjs/toolkit";
import { Register, AddPlays } from "../Actions/PlayersActions";

type TypePlayer = {
  name: string;
  character: string;
  thumbnail: string;
  symbol: "null" | "x" | "o";
  id: number;
  winners: number;
  plays: Array<string>;
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
    plays: [],
  },
  playTwo: {
    name: "",
    character: "",
    thumbnail: "",
    symbol: "null",
    id: 2,
    winners: 0,
    plays: [],
  },
};

const Players = createSlice({
  name: "Players",
  initialState,
  reducers: {
    AddPlays,
    Register,
  },
});

export const { Register: register, AddPlays: addPlays } = Players.actions;

export default Players.reducer;
