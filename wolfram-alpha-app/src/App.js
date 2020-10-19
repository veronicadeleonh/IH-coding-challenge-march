import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home.js"
import MoonPath from "./components/MoonPath"
import SunPath from "./components/SunPath"

function App() {
  return (
    <div className="App">
      <h1>Wolfram Alpha App</h1>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/moon-path" component={MoonPath} />
      <Route exact path="/sun-path" component={SunPath} /> 
      </Switch>
    </div>
  );
}

export default App;
