import React, {Component} from "react";
import {connect} from "react-redux";

class BookList extends Component {
  renderBookList() {
    return this.props.books.map(book => {
      return (
        <li className="list-group-item"
            key={book.title}>
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

export default connect(mapStateToProps)(BookList);

