import React, { Component } from 'react';

import BookList from './book-list'
import BookDetail from './book-detail'

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail/>
      </div>
    );
  }
}
