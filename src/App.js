import React, { Component } from "react";
import Quakes from "./containers/Quakes";
import Maps from "./containers/Maps";
//import the map container

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    titles: []
  };

  componentDidMount() {
    // window.addEventListener("keyup", this.handleKeyUp);
    fetch(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson"
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ titles: data.features });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <Maps />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <Quakes data={this.state.titles} />
        </div>
      </div>
    );
  }
}

export default App;
