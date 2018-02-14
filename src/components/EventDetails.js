import React, { Component } from "react";

class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {
        name: ""
      }
    };
  }

  getEventDetails() {
    fetch(
      `https://www.eventbriteapi.com/v3${
        this.props.match.url
      }/?token=VBUSKKCQ2VTXKPOP34PX`
    )
      .then(res => res.json())
      .then(res => this.setState({ event: res }))
      .catch(error => console.error(error));
  }

  componentDidMount() {
    this.getEventDetails();
  }

  render() {
    return <div>{this.state.event.name.text}</div>;
  }
}

export default EventDetails;
