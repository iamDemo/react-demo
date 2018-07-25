import {FETCH_WEATHER} from "../actions/fetch_weather";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // once ReduxPromise middleware is added, this following line will only be executed once the real data is back
      // action.payload is not a Promise anymore, it is the real data returned from weather API server
      console.log(`Reducer -> receive payload`, action.payload);

      // reducer should always return a new state (do not modify original state and return it)
      // promise.data is the real data
      return [action.payload.data, ...state];
  }

  return state;
}