import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "routes/Home";
import Search from "routes/Search";
import Tv from "routes/Tv";
import Header from "./Header";

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/tv" component={Tv} />
      <Route exact path="/search" component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default AppRouter;
