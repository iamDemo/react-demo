import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
// an action from
import {selectBook} from '../actions/a-select-book'

class BookList extends Component {
  renderBookList() {
    return this.props.books.map(book => {
      return (
        <li className="list-group-item"
            key={book.title}
            onClick={() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      );
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">{this.renderBookList()}</ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    // register state.books into props.books
    // 1. state.books is managed by reducers
    // 2. props.books is used by components/containers
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  // register action.selectBook to props.selectBook
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
