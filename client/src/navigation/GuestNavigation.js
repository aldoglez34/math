import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import NoMatch from "../pages/nomatch";
import SignUp from "../pages/signup";
import Login from "../pages/login";

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        {/* 404 not found */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </Router>
  );
};
