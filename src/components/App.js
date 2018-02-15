import React from "react";
import "./App.css";
import EventCard from "./EventCard";
import { Container, Pagination, Button } from "semantic-ui-react";
import Navbar from "./Navbar";
import Loading from "./Loading";

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.state = {
      activePage: 1,
      loading: true
    };
  }

  componentDidMount() {
    this.setState({ activePage: this.props.activePage });
  }

  handleChange(event, { activePage }) {
    event.preventDefault();
    this.setState({
      activePage
    });
    this.props.getEvents(activePage);
  }

  handleBackClick(event) {
    event.preventDefault();
    let activePage = this.state.activePage - 1;
    this.props.getEvents(activePage);
    this.setState({
      activePage
    });
  }

  handleNextClick(event) {
    event.preventDefault();
    let activePage = this.state.activePage + 1;
    this.props.getEvents(activePage);
    this.setState({
      activePage
    });
  }

  render() {
    const { activePage } = this.props;
    return (
      <div>
        <Navbar
          fixed={true}
          button={false}
          getEvents={this.props.getEvents}
          totalPages={this.props.pageCount}
        />
        <br />
        <br />
        <br />
        <br />
        <Container style={{ textAlign: "center" }}>
          <Pagination
            firstItem={null}
            lastItem={null}
            activePage={activePage}
            pointing
            secondary
            siblingRange={2}
            onPageChange={this.handleChange}
            totalPages={this.props.pageCount || 20}
            id="pagination"
          />
          <div id="navigation">
            <Button
              content="Previous"
              icon="left arrow"
              labelPosition="left"
              onClick={this.handleBackClick}
              disabled={this.state.activePage > 1 ? null : true}
            />
            <Button
              content="Next"
              icon="right arrow"
              labelPosition="right"
              onClick={this.handleNextClick}
              disabled={this.state.activePage < 200 ? null : true}
            />
          </div>
          {this.props.loading ? (
            <Loading />
          ) : (
            <Container id="cards">
              <br />
              <br />
              {this.props.events.map((event, i) => (
                <EventCard event={event} key={i} />
              ))}
            </Container>
          )}
        </Container>
      </div>
    );
  }
}

export default App;
