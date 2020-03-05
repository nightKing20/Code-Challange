import React, { Component } from "react";
import { BASIC_STYLE } from "./Style";
import MapGL, { Source, Layer, NavigationControl } from "react-map-gl";
import { usIncome } from "../../data/incomeData";
import { stateCapitals } from "../../data/stateCapitals";
import style from "../../style.scss";

const usLayer = {
  id: "data",
  type: "fill",
  paint: {
    "fill-color": {
      property: "value",
      stops: [[0, "#000"]]
    },
    "fill-opacity": 0.2
  }
};

const usCapitalsLayer = {
  type: "circle",
  paint: {
    "circle-radius": [
      "interpolate",
      ["linear"],
      ["zoom"],
      2,
      2,
      3,
      3,
      4,
      4,
      5,
      10,
      6,
      12,
      7,
      14,
      8,
      16,
      9,
      18,
      10,
      20
      // over level 10 keep radius 20.
    ],
    "circle-color": "#cc1f00"
  }
};

const navigationStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  width: "auto",
  height: "auto",
  padding: "10px"
};

export default class MapView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapStyle: BASIC_STYLE,
      viewport: {
        width: "100%",
        height: "100%",
        latitude: 39.5501,
        longitude: -105.3588,
        zoom: 3.5
      }
    };
  }
  onViewportChange = viewport => this.setState({ viewport });

  render() {
    return (
      <div className={style.mapContainer}>
        <MapGL
          {...this.state.viewport}
          mapStyle={this.state.mapStyle}
          onViewportChange={this.onViewportChange}
        >
          <Source type="geojson" data={usIncome}>
            <Layer {...usLayer} />
          </Source>
          <Source type="geojson" data={stateCapitals}>
            <Layer {...usCapitalsLayer} />
          </Source>
          <div className="nav" style={navigationStyle}>
            <NavigationControl />
          </div>
        </MapGL>
      </div>
    );
  }
}
