type TypePlayer = {
  name: string;
  character: string;
  thumbnail: string;
  symbol: string;
  id: number;
  winners: number;
  plays: Array<string>;
};

type StateType = {
  rowID: number;
  hasWinner: boolean;
  delayFinished: boolean;
  hasDraw: boolean;
  winner: {
    name: string;
    id: number;
    thumbnail: string;
  };
  isRunning: boolean;
  playOne: TypePlayer;
  playTwo: TypePlayer;
};

type ActionType = {
  type?: string;
  payload: TypePlayer;
};

export function Register(state: StateType, action: ActionType) {
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

type TypeAddPlay = {
  payload: {
    id: number;
    button: string;
  };
};

export function AddPlays(state: StateType, action: TypeAddPlay) {
  const { playOne, playTwo } = state;
  const { id, button } = action.payload;

  if (playOne.id === id) {
    playOne.plays.push(button);
    return;
  }

  if (playTwo.id === id) {
    playTwo.plays.push(button);
  }
}

type TypeActionWinner = {
  payload: {
    id: number;
  };
};

export function AddWinner(state: StateType, action: TypeActionWinner) {
  const { id } = action.payload;
  const { playOne, playTwo, winner } = state;

  state.hasWinner = true;

  if (id === playOne.id) {
    playOne.winners += 1;
    playOne.plays = [];
    playTwo.plays = [];
    winner.id = id;
    winner.name = playOne.name;
    winner.thumbnail = playOne.thumbnail;
  }

  if (id === playTwo.id) {
    playTwo.winners += 1;
    playTwo.plays = [];
    playOne.plays = [];
    winner.id = id;
    winner.name = playTwo.name;
    winner.thumbnail = playTwo.thumbnail;
  }
}

export function RestartGame(state: StateType) {
  const { winner, playOne, playTwo } = state;
  const symbol = ["x", "o"];

  winner.id = 0;
  winner.name = "";
  winner.thumbnail = "";

  const price_draw = Math.floor(Math.random() * 2); // 0 or 1

  playOne.symbol = symbol[price_draw];
  playTwo.symbol = price_draw === 1 ? symbol[0] : symbol[1];

  state.hasWinner = false;
  state.delayFinished = false;
  state.hasDraw = false;

  playTwo.plays = [];
  playOne.plays = [];
}
