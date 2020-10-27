import React from 'react'

const SunPath = ({ loading, sunData }) => {

    if(loading) {
        return <h2>Loading...</h2>
    }
    
    console.log("sunData", sunData)

    return (
        <>
            <h2>Sun Paths</h2>
            {sunData.map((city, index) => (
                <div key={index.toString()}>
                <h3>{city.title}</h3>
                <img 
                    src={city.subpods[0].img.src} 
                    alt={city.subpods[0].img.alt} 
                    />
                </div>    
            ))}
        </>
    )
}


export default SunPath

