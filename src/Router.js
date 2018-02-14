import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/App";
import EventDetails from "./components/EventDetails";

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      pagination: {}
    };
    this.getEvents = this.getEvents.bind(this);
  }

  getEvents(page = 1) {
    fetch(
      `https://www.eventbriteapi.com/v3/events/search/?token=VBUSKKCQ2VTXKPOP34PX&page=${page}`
    )
      .then(res => res.json())
      .then(res => {
        return this.setState({
          events: res.events,
          pagination: res.pagination
        });
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getEvents();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <App
                events={this.state.events}
                getEvents={this.getEvents.bind(this)}
                pageCount={this.state.pagination.page_count}
                {...props}
              />
            )}
          />
          <Route path={`/events/:id`} component={EventDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
