import { createSlice } from "@reduxjs/toolkit";
import {
  Register,
  AddPlays,
  AddWinner,
  RestartGame,
} from "../Actions/PlayersActions";

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
  hasWinner: boolean;
  delayFinished: boolean;
  winner: {
    name: string;
    id: number;
    thumbnail: string;
  };
  playOne: TypePlayer;
  playTwo: TypePlayer;
};

const initialState: StateType = {
  isRunning: false,
  hasWinner: false,
  delayFinished: false,
  winner: {
    name: "",
    id: 0,
    thumbnail: "",
  },
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
    AddWinner,
    RestartGame,
    activeDelay: (state) => {
      state.delayFinished = true;
    },
  },
});

export const {
  Register: register,
  AddPlays: addPlays,
  AddWinner: addWinner,
  RestartGame: restartGame,
  activeDelay,
} = Players.actions;

export default Players.reducer;
