import React, { Component } from "react";

export default class GoogleMap extends Component {
  // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here.
  componentDidMount() {
    // google.maps.Map is not a react component, and it is introduced inside index.html by referring the script
    //    <script src="https://maps.googleapis.com/maps/api/js"></script>
    new google.maps.Map(
      this.refs.map,
      {
        zoom: 12,
        center: {
          lat: this.props.lat,
          lng: this.props.lng
        }
      }
    )
  }

  render() {
    // this.ref.map
    // ref is like a placeholder which can be referred in a third party library to inject specific view to here
    return <div ref="map"/>;
  };
};
