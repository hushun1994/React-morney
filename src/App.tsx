import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import Nav from "components/Nav";
import Layout from "components/Layout";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/money">
          <Money />
        </Route>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Redirect exact from="/" to="/money" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账页面</h2>
    </Layout>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>标签页面</h2>
    </Layout>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>统计页面</h2>
    </Layout>
  );
}

function NoMatch() {
  return <h2>No Match 404</h2>;
}

export default App;
