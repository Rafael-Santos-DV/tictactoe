import { call, put } from "redux-saga/effects";
import { activeDelay } from "../Features/Players";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function* Delay() {
  yield call(delay, 2000);

  yield put(activeDelay());
}
