import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchWeather} from "../actions/fetch_weather"

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ""};

    // otherwise -> Uncaught TypeError: Cannot read property 'setState' of undefined
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    // remain the same page (not jump to another one)
    event.preventDefault();

    // trigger action
    this.props.fetchWeather(this.state.term);
    // clear the form
    this.setState({term: ""});
  }

  render() {
    return (
      // use form since it has some built-in features 1. user can enter enter to submit request 2. text can be cleared out after submitting request
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  // register action.fetchWeather to props.selectBook
  return bindActionCreators({fetchWeather}, dispatch) // same as -> return bindActionCreators({fetchWeather: fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);


