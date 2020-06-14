import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "../pages/dashboard";
import NoMatch from "../pages/nomatch";

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />

        <Redirect from="/" to="/dashboard" />
        {/* 404 not found */}
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};
