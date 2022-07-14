type TypePlayer = {
  name: string;
  character: string;
  thumbnail: string;
  symbol?: string;
  id: number;
  winners?: number;
};

type StateType = {
  rowID: number;
  isRunning: boolean;
  playOne: TypePlayer;
  playTwo: TypePlayer;
};

type ActionType = {
  type?: string;
  payload: TypePlayer;
};

export default function Register(state: StateType, action: ActionType) {
  const symbol = ["x", "o"];

  const { playOne, playTwo, rowID } = state;
  const { id, character, name, thumbnail } = action.payload;

  if (playOne.id === id && rowID === id) {
    playOne.character = character;
    playOne.name = name;
    playOne.thumbnail = thumbnail;
    state.rowID = 2;
    return;
  }

  playTwo.character = character;
  playTwo.name = name;
  playTwo.thumbnail = thumbnail;
  state.isRunning = true;

  const price_draw = Math.floor(Math.random() * 2); // 0 or 1

  playOne.symbol = symbol[price_draw];
  playTwo.symbol = price_draw === 1 ? symbol[0] : symbol[1];
}
