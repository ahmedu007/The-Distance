import React, { Component } from "react";
import "./App.css";
import EventCard from "./EventCard";
import { Container } from "semantic-ui-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      pagination: {}
    };
  }

  getEvents() {
    fetch(
      "https://www.eventbriteapi.com/v3/events/search/?token=VBUSKKCQ2VTXKPOP34PX&page=1"
    )
      .then(res => res.json())
      .then(res =>
        this.setState({
          events: res.events,
          pagination: res.pagination
        })
      )
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getEvents();
  }

  render() {
    return (
      <Container
        className="container"
        textAlign="center"
        style={{ padding: "5%" }}
      >
        {this.state.events.map((event, i) => (
          <EventCard event={event} key={i} />
        ))}
      </Container>
    );
  }
}

export default App;
