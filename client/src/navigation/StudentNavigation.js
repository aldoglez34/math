import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/home";

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* 404 not found */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </Router>
  );
};
