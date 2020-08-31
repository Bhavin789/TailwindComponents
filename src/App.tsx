import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Test from "./Test";

import "./App.css";
import "./assets/main.css";

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Test} />
  </Switch>
);

export default App;
