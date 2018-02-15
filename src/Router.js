import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/App";
import EventDetails from "./components/EventDetails";
import NotFound from "./components/NotFound";

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      activePage: 1,
      loading: true,
      pagination: {}
    };
    this.getEvents = this.getEvents.bind(this);
  }

  getEvents(page = 1) {
    this.setState({
      loading: true
    });
    fetch(
      `https://www.eventbriteapi.com/v3/events/search/?token=VBUSKKCQ2VTXKPOP34PX&page=${page}`
    )
      .then(res => res.json())
      .then(res => {
        return this.setState({
          events: res.events,
          pagination: res.pagination,
          activePage: page,
          loading: false
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
                getEvents={this.getEvents}
                pageCount={this.state.pagination.page_count}
                loading={this.state.loading}
                activePage={this.state.activePage}
                {...props}
              />
            )}
          />
          <Route
            exact
            path={`/events/:id`}
            render={props => (
              <EventDetails events={this.state.events} {...props} />
            )}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
