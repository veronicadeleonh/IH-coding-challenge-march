import React, { Component } from 'react'
import axios from 'axios'

export default class SunPath extends Component {

    state = {
     titleSCaracas: "",
     sunPathCaracas: {},
     titleSerrekunda: "",
     sunPathSerrekunda: {}
    };

    

getCaracasSP = () => {
    axios
    .get("http://api.wolframalpha.com/v2/query?appid=6TP376-VPK96VK7R8&input=sun&output=json&location=caracas")
    .then((response) => {
     console.log("caracas", response.data.queryresult.pods[3])
     this.setState({ titleCaracas: response.data.queryresult.pods[3].title, sunPathCaracas: response.data.queryresult.pods[3].subpods[0].img})
    })
    .catch(error => console.log(error))
}

getSerrekundaSP = () => {
    axios
    .get("http://api.wolframalpha.com/v2/query?appid=6TP376-VPK96VK7R8&input=sun&output=json&location=serrekunda")
    .then((response) => {
     console.log("serrekunda", response.data.queryresult.pods[3])
     this.setState({ titleSerrekunda: response.data.queryresult.pods[3].title, sunPathSerrekunda: response.data.queryresult.pods[3].subpods[0].img})
    })
    .catch(error => console.log(error))
}


componentDidMount() {
    this.getCaracasSP();
    this.getSerrekundaSP()
}

    render() {
        const caracasSP = this.state.sunPathCaracas;
        const serrekundaSP = this.state.sunPathSerrekunda;

        return (
            <div>
                <h3>{this.state.titleCaracas}</h3>
                <img 
                   src={caracasSP.src}
                   alt={caracasSP.alt}
                   />
                
                <h3>{this.state.titleSerrekunda}</h3>
                <img 
                   src={serrekundaSP.src}
                   alt={serrekundaSP.alt}
                   />
            </div>
        )
    }
    
}



