import React, { Component } from 'react';
import axios from "axios"

export default class MoonPath extends Component {

state = {
    moonPathCaracas: {}
}

getMoonPathCaracas = () => {
    axios
    .get("http://api.wolframalpha.com/v2/query?appid=6TP376-VPK96VK7R8&input=moon&output=json&location=caracas")
    .then(response => {
        console.log("caracas moon", response.data.queryresult.pods[5].subpods[0])
        this.setState({ moonPathCaracas: response.data.queryresult.pods[5].subpods[0].img})
    })
}

componentDidMount () {
 this.getMoonPathCaracas()
}

    render() {

        const caracasMP = this.state.moonPathCaracas

        return (
            <div>
                <h3>{caracasMP.alt}</h3>
                <img 
                   src={caracasMP.src}
                   alt={caracasMP.alt}
                   />
            </div>
        )
    }
}
