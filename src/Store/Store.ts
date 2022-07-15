import { configureStore } from "@reduxjs/toolkit";
import Players from "../Features/Players";
import Plays from "../Features/Plays";
import createSagaMiddleware from "redux-saga";

export const sagaMiddeware = createSagaMiddleware();
const middleware = [sagaMiddeware];

const store = configureStore({
  reducer: { Players, Plays },
  middleware: middleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const GlobalDispatch = store.dispatch;

export default store;
