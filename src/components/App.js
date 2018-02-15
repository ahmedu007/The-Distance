import React from "react";
import "./App.css";
import EventCard from "./EventCard";
import { Container, Pagination, Segment } from "semantic-ui-react";
import Navbar from "./Navbar";

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
      <div>
        <Navbar fixed={true} button={false} />
        <br />
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
      </div>
    );
  }
}

export default App;
