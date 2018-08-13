import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import ReducerPosts from './reducer_posts'

const rootReducer = combineReducers({
  posts: ReducerPosts,
  // Uncaught Error: You need to mount the redux-form reducer at "form"
  form: formReducer
});

export default rootReducer;
