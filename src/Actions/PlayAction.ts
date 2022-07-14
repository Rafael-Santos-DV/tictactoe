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
type ActionType = {
  payload: {
    id: number;
    button: string;
    symbol: "x" | "o";
  };
};

export default function Play(state: StateType, action: ActionType) {
  state.buttons = {
    ...state.buttons,
    [action.payload.button]: action.payload.symbol,
  };

  state.yourTime = action.payload.id;
}
