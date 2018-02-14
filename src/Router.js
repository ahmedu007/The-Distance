import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/App";

const Router = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" Component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
