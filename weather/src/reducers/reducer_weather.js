import {FETCH_WEATHER} from "../actions/fetch_weather";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      console.log(`Reducer -> receive action.payload: ${action.payload}`, action.payload);

      // reducer should always return a new state (do not modify original state and return it)
      // promise.data is the real data
      return [action.payload.data, ...state];
  }

  return state;
}