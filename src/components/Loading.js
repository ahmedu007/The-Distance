import React, { Component } from "react";
import "./Loading.css";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="text">
        <div className="spinner">
          <div className="dot1" />
          <div className="dot2" />
        </div>
        Please wait while we fetch your information
      </div>
    );
  }
}

export default Loading;
