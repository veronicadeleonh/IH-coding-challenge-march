import React from 'react'

const MoonPath = (loading, citiesData) => {

    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>Moon Paths</h2>
        </div>
    )
}

export default MoonPath