import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Detail from "routes/Detail";
import Home from "routes/Home";
import Search from "routes/Search";
import TV from "routes/TV";
import Header from "./Header";

function AppRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
        <Route path="/movie/:id([0-9]*)" exact component={Detail} />
        <Route path="/tv/:id([0-9]*)" exact component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default AppRouter;
