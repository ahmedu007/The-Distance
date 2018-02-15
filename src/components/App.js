import React from "react";
import "./App.css";
import EventCard from "./EventCard";
import { Container, Pagination, Segment } from "semantic-ui-react";

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
      <Segment textAlign="center">
        <Pagination
          defaultActivePage={1}
          firstItem={null}
          lastItem={null}
          pointing
          secondary
          onPageChange={this.handleChange}
          totalPages={this.props.pageCount || 20}
        />
        <Container fluid style={{ width: "667px" }}>
          <br />
          <br />
          {this.props.events.map((event, i) => (
            <EventCard event={event} key={i} />
          ))}
        </Container>
      </Segment>
    );
  }
}

export default App;
