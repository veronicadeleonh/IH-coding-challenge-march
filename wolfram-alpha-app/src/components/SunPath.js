import axios from 'axios'
import React from 'react'

export default function SunPath() {

    state = {
    sunPath: []
    }

getSunPathData = () => {
    axios.get("http://api.wolframalpha.com/v2/query?6TP376-VPK96VK7R8=DEMO&input=test")
}

    return (
        <div>
            
        </div>
    )
}
