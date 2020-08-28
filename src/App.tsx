import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

import './App.css';
import "./assets/main.css";

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
  </Switch>
);

export default App;