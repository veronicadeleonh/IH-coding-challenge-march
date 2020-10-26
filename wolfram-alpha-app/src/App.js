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
// const MoonDataRef = useRef([])
const [SunData, setSunData] = useState([])
// const SunDataRef = useRef([])


useEffect(() => {

  const fetchData = async () => {

    setLoading(true)
  
    const respMoon = await cities.map(city =>  
  
        axios
        .get(`http://api.wolframalpha.com/v2/query?appid=6TP376-VPK96VK7R8&input=moon&output=json&location=${city}`)
        .then(response => {
        // console.log("respMoon", response.data.queryresult.pods[5])
          setMoonData(MoonData => [...MoonData, response.data.queryresult.pods[5]])
        })
        .catch(err => {
          console.log(err)
        }))
            
    const respSun = await cities.map(city => 
        axios
        .get(`http://api.wolframalpha.com/v2/query?appid=6TP376-VPK96VK7R8&input=sun&output=json&location=${city}`)
        .then(response => {
        // console.log("respSun", response.data.queryresult.pods[3])
          setSunData(SunData => [...SunData, response.data.queryresult.pods[3]])
        })
        .catch(err => {
          console.log(err)
        }));
  
  
    setLoading(false)

      }

      fetchData()
      
      }, []);

// console.log("moonData", MoonData)
// console.log("SunData", SunData)

  return (
    <div className="App">
      <h1>Sun & Moon paths <span role="img" aria-label="sun">☀️</span><span role="img" aria-label="moon">🌙</span></h1>
      <Switch>
      <Route exact path="/" render={(props) => (<Home {...props} />)} />
      <Route exact path="/moonpath" render={(props) => (<MoonPath {...props} />)} />
      <Route exact path="/sunpath" render={(props) => (<SunPath {...props} />)} /> 
      </Switch>
    </div>
  );
}

export default App;
