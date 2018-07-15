import {combineReducers} from 'redux';

import BooksReducer from './r-book-list';
import SelectedBookReducer from './r-selected-book'

const rootReducer = combineReducers({
// will register those BooksReducer into state.books
  books: BooksReducer,
  selectedBook: SelectedBookReducer
});

export default rootReducer;
