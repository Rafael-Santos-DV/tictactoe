import { createSlice } from "@reduxjs/toolkit";
import Play, { RestartPlay } from "../Actions/PlayAction";

type StateType = {
  yourTime: number;
  buttons: {
    one: "null" | "x" | "o";
    two: "null" | "x" | "o";
    three: "null" | "x" | "o";
    four: "null" | "x" | "o";
    five: "null" | "x" | "o";
    six: "null" | "x" | "o";
    seven: "null" | "x" | "o";
    eight: "null" | "x" | "o";
    nine: "null" | "x" | "o";
  };
};

const initialState = {
  yourTime: 0,
  buttons: {
    one: "null",
    two: "null",
    three: "null",
    four: "null",
    five: "null",
    six: "null",
    seven: "null",
    eight: "null",
    nine: "null",
  },
} as StateType;

export const Plays = createSlice({
  name: "Plays",
  initialState,
  reducers: { Play, RestartPlay },
});

export const { Play: plays, RestartPlay: restartPlay } = Plays.actions;

export default Plays.reducer;
