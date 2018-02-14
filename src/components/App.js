import React from "react";
import "./App.css";
import EventCard from "./EventCard";
import { Container, Pagination } from "semantic-ui-react";

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, { activePage }) {
    event.preventDefault();
    this.props.getEvents(activePage);
  }

  render() {
    return (
      <Container
        className="container"
        textAlign="center"
        style={{ padding: "5%" }}
      >
        <Pagination
          defaultActivePage={1}
          onPageChange={this.handleChange}
          totalPages={this.props.pageCount || 20}
        />
        <br />
        <br />
        {this.props.events.map((event, i) => (
          <EventCard event={event} key={i} />
        ))}
      </Container>
    );
  }
}

export default App;
