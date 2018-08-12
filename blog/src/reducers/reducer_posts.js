import {FETCH_POSTS} from "../actions/index";

const INITIAL_STATE = {all: []};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('state', state);
      console.log('data', action.payload.data);

      return {...state, all: action.payload.data};
    default:
      return state;
  }
};
