import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/App";
import Test from "./components/Test";
import EventDetails from "./components/EventDetails";

class Router extends React.Component {
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
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <App events={this.state.events} {...props} />}
          />
          <Route exact path="/test" component={Test} />
          <Route path={`/events/:id`} component={EventDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
