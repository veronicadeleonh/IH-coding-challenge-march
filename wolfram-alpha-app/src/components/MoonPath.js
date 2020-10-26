import React from 'react'

const MoonPath = ({ loading, MoonData }) => {

    if(loading) {
        return <h2>Loading...</h2>
    }

    console.log("moonData", MoonData)


    return (
        <div>
            <h2>Moon Paths</h2>
            {/* {MoonData.map(city => (
                <h3>{city.data.queryresults.pods[5].title}</h3>
            ))} */}
        </div>
    )
}

export default MoonPath