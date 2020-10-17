import React, { Component } from 'react'
import axios from 'axios'

export default class SunPath extends Component {

    state = {
     sunPath: []
    };

    getSunPathData = () => {
    axios
    .get("http://api.wolframalpha.com/v2/query?appid=6TP376-VPK96VK7R8&input=sun&output=json&location=Caracas")
    .then((sunPathList) => {
        //this.setState({ sunPath: sunPathList.data})
        console.log( "this is the data", sunPathList.data.queryresult)
    })
    .catch(error => console.log(error))
}

    componentDidMount() {
        this.getSunPathData()
    }

    render() {
        return (
            <div>
                <h2>Moon in Caracas</h2>
                <h2>Moon in Santiago de Cuba</h2>
                <h2>Moon in Serrekunda</h2>
                <h2>Moon in Fukuoka</h2>
            </div>
        )
    }
    
}



