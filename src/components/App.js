import React from "react";
import "./App.css";
import EventCard from "./EventCard";
import { Container } from "semantic-ui-react";

const App = props => {
  return (
    <Container
      className="container"
      textAlign="center"
      style={{ padding: "5%" }}
    >
      {props.events.map((event, i) => <EventCard event={event} key={i} />)}
    </Container>
  );
};

export default App;
