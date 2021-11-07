import React, { useEffect } from 'react'

const Loader = () => {
    useEffect(() => {
        require('./Loader.css');
    }, [])

    return (
        <div id="loader" className="logoBackground">
            <div>
                <div className="reverse-spinner"></div>
            </div>
            <div>
                <div className="hm-spinner"></div>
            </div>
        </div>
    )
}

export default Loader
