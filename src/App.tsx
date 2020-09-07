import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Money from "views/Money";
import Tags from "views/Tags";
import Statistics from "views/Statistics";
import NotFound from "views/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/money" component={Money} />
        <Route path="/tags" component={Tags} />
        <Route path="/statistics" component={Statistics} />
        <Redirect exact from="/" to="/money" />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
