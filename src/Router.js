import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/App";
import Test from "./components/Test";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
