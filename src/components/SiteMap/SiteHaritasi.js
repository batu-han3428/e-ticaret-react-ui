import React, { useEffect, useState } from 'react'
import SiteHaritasiItem from './SiteHaritasiItem'
import { Link } from 'react-router-dom'
import './SiteHaritasi.css'

const SiteHaritasi = (props) => {

    const [yollar, setYollar] = useState([]);

    useEffect(() => {
        setYollar(props.pathname.split("/"));
    }, [])
    
    return (
        <div className="container" >
            <div className="row">
                <div className="col-md-12" id="siteHaritasiSutun">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link id="siteHaritasiLink" to="/">Ana Sayfa</Link></li>
                        {yollar.map((yol, index)=>{
                            return <SiteHaritasiItem index={index+1} key={index} length={yollar.length} veri={yol}/>
                        })}                     
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default SiteHaritasi
