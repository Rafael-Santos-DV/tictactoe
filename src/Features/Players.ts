import { createSlice } from "@reduxjs/toolkit";
import Register from "../Actions/PlayersActions";

const Players = createSlice({
  name: "Players",
  initialState: {
    isRunning: false,
    rowID: 1,
    playOne: {
      name: "",
      character: "",
      thumbnail: "",
      symbol: "",
      id: 1,
      winners: 0,
    },
    playTwo: {
      name: "",
      character: "",
      thumbnail: "",
      symbol: "",
      id: 2,
      winners: 0,
    },
  },
  reducers: {
    Register,
  },
});

export const { Register: register } = Players.actions;

export default Players.reducer;
