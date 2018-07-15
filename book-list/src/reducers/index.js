import {combineReducers} from 'redux';

import BooksReducer from './r-book-list';

const rootReducer = combineReducers({
// will register those BooksReducer into state.books
  books: BooksReducer
});

export default rootReducer;
