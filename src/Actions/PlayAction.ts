type StateType = {
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
type ActionType = {
  payload: {
    id: number;
    button: string;
    symbol: "null" | "x" | "o";
  };
};

export default function Play(state: StateType, action: ActionType) {
  state.buttons = {
    ...state.buttons,
    [action.payload.button]: action.payload.symbol,
  };
}

export function RestartPlay(state: StateType) {
  state.buttons = {
    one: "null",
    two: "null",
    three: "null",
    four: "null",
    five: "null",
    six: "null",
    seven: "null",
    eight: "null",
    nine: "null",
  };
}
