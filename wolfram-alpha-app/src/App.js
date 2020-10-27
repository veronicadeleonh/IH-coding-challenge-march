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
const [moonData, setMoonData] = useState([])
// const MoonDataRef = useRef([])
const [sunData, setSunData] = useState([])
// const SunDataRef = useRef([])


useEffect(() => {

  const fetchData = async () => {

    setLoading(true)
  
    const respMoon = await cities.map(city => fetchMoonData(city))
            
    const respSun = await cities.map(city => fetchSunData(city));
  
  
    setLoading(false)

      }

      fetchData()
      
      }, []);


const fetchMoonData = (city) => {
        axios
        .get(`http://api.wolframalpha.com/v2/query?appid=6TP376-VPK96VK7R8&input=moon&output=json&location=${city}`)
        .then(response => {
        // console.log("respMoon", response.data.queryresult.pods[5])
          setMoonData(moonData => [...moonData, response.data.queryresult.pods[5]])
        })
        .catch(err => {
          console.log(err)
        })
}

const fetchSunData = (city) => {
      axios
      .get(`http://api.wolframalpha.com/v2/query?appid=6TP376-VPK96VK7R8&input=sun&output=json&location=${city}`)
      .then(response => {
      // console.log("respSun", response.data.queryresult.pods[3])
      setSunData(sunData => [...sunData, response.data.queryresult.pods[3]])
       })
      .catch(err => {
      console.log(err)
      })
}
// console.log("moonData", moonData)
// console.log("SunData", sunData)

  return (
    <div className="App">
      <h1>Sun & Moon paths <span role="img" aria-label="sun">☀️</span><span role="img" aria-label="moon">🌙</span></h1>
      <Switch>
      <Route exact path="/" render={(props) => (<Home cities={cities} setCities={setCities} fetchMoonData={fetchMoonData} fetchSunData={fetchSunData} />)} />
      <Route exact path="/moonpath" render={(props) => (<MoonPath loading={loading} moonData={moonData} />)} />
      <Route exact path="/sunpath" render={(props) => (<SunPath loading={loading} sunData={sunData} />)} /> 
      </Switch>
    </div>
  );
}

export default App;
