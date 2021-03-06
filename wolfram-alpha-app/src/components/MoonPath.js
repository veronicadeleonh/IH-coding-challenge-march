import React from 'react'

const MoonPath = ({ loading, moonData }) => {

    if(loading) {
        return <h2>Loading...</h2>
    }

    console.log("moonData", moonData)

    return (
        <>
            <h2>Moon Paths</h2>
            {moonData.map((city, index) => (
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

export default MoonPath