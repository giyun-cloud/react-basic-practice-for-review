import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Home from "routes/Home";
import Search from "routes/Search";
import Tv from "routes/Tv";
import Header from "components/Header";

function AppRouter() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tv" component={Tv} />
          <Route path="/search" component={Search} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default AppRouter;
