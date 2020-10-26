import React, { useState, useEffect }  from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch } from "react-router-dom";
import axios from "axios"
import Home from "./components/Home.js";
import MoonPath from "./components/MoonPath";
import SunPath from "./components/SunPath";

const App = () => {

const [cities, setCities] = useState(["Caracas", "Toronto", "Berlin"])
const [loading, setLoading] = useState(false)
const [MoonData, setMoonData] = useState([])
const [SunData, setSunData] = useState([])

useEffect(() => {
  const fecthPaths = async () => {
    setLoading(true)
    const respMoon = await cities.map(city => 
        axios.get(`http://api.wolframalpha.com/v2/query?appid=6TP376-VPK96VK7R8&input=moon&output=json&location=${city}`));
        console.log("respMoon", respMoon)
    
    const respSun = await cities.map(city => 
        axios.get(`http://api.wolframalpha.com/v2/query?appid=6TP376-VPK96VK7R8&input=sun&output=json&location=${city}`));
        console.log("respSun", respSun)

    setLoading(false)
    setMoonData(respMoon)
    setSunData(respSun)
    console.log(MoonData)
    }
    fecthPaths()
    }, [] );

const addCityHandler = (event) => {
  console.log("cities event", event)
  setCities(cities.push("Lima")) 
}

  return (
    <div className="App">
      <h1>Sun & Moon paths <span role="img" aria-label="sun">☀️</span><span role="img" aria-label="moon">🌙</span></h1>
      <Switch>
      <Route exact path="/" render={(props) => (<Home {...props} isAuthed={true} />)} />
      <Route exact path="/moonpath" render={(props) => (<MoonPath {...props} isAuthed={true} />)} />
      <Route exact path="/sunpath" render={(props) => (<SunPath {...props} isAuthed={true} />)} /> 
      </Switch>
    </div>
  );
}

export default App;
