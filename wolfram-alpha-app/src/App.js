import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import MoonPath from "./components/MoonPath";
import SunPath from "./components/SunPath";

function App() {
  return (
    <div className="App">
      <h1>Sun & Moon paths ☀️🌙</h1>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/moonpath" component={MoonPath} />
      <Route exact path="/sunpath" component={SunPath} /> 
      </Switch>
    </div>
  );
}

export default App;
