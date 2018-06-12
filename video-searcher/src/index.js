import React, { Component } from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar"

class App extends Component {
  render() {
    return (
      <div>
        <div>hello world</div>
        <SearchBar onSearchTermChange={term => console.log(term)} />
      </div>
    );
  }
}


// adding div block into index.htmlw
ReactDOM.render(<App />, document.querySelector(".container"));
