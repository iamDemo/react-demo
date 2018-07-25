import React, {Component} from "react";
import {connect} from "react-redux";

import Chart from "../components/chart";
import GoogleMap from "../components/google_map"

class WeatherList extends Component {
  renderWeather(weatherData) {
    // console.log('WeatherList receives: ', weatherData);

    const name = weatherData.city.name;
    const temps = weatherData.list.map(weather => weather.main.temp);
    const pressures = weatherData.list.map(weather => weather.main.pressure);
    const humidities = weatherData.list.map(weather => weather.main.humidity);
    const {lon, lat} = weatherData.city.coord;

    return (
      <tr key={name}>
        {/*<td>{name}</td>*/}
        <td><GoogleMap lng={lon} lat={lat}/></td>
        <td><Chart data={temps} color="orange" units="K"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="black" units="%"/></td>
      </tr>
    );
  }

  render() {
    // console.log('WeatherList is going to render list based on data received from reducer', this.props.weather);

    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature (K)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
        </thead>
        <tbody>
        {/*{this.props.weather.map(data => this.renderWeather(data))}*/}
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// function mapStateToProps(state){
//   return {
//     weather: state.weather
//   };
// }

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
