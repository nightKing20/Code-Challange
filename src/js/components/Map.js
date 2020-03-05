/*
  Build your React Map Component here.
  Feel free to use class or functional component
*/

import React, { Component } from "react";
import Title from "./Title";
import MapView from "./MapView";
import style from "../../style.scss";

export class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Title />
        <MapView />
      </div>
    );
  }
}
