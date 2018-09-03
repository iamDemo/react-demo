import _ from "lodash";

import {DELETE_POST, FETCH_POST, FETCH_POSTS} from "../actions/index";

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('Reducer: FETCH_POSTS receives state', state);
      console.log('Reducer: FETCH_POSTS receives data', action.payload.data);

      // in posts/index, state.posts will be all posts returned from API
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      // use id as a selector in posts/show.js
      return {...state, [action.payload.data.id]: action.payload.data};
    case DELETE_POST:
      console.log('Reducer: DELETE_POST receives state', state);
      // local state still contains the deleted one
      const deletedPostId = action.payload;

      return _.omit(state, deletedPostId);
    default:
      return state;
  }
};
