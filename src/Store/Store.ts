import { configureStore } from "@reduxjs/toolkit";
import Players from "../Features/Players";
import Plays from "../Features/Plays";

const store = configureStore({
  reducer: { Players, Plays },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
