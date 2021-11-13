import React from 'react'
import { Link } from 'react-router-dom'

const SiteHaritasiItem = (props) => {
    return (
        <>
            {props.veri!==""?
                <li className="breadcrumb-item">
                    {isNaN(props.veri)?
                        <Link id="siteHaritasiLink" to={`/${props.veri}`}>{props.veri}</Link>:
                        <Link id="siteHaritasiLink" to={`/Telefon/${props.veri}`}>Ürün Detayı</Link>
                    }
                </li>
                :""
            }
        </>     
    )
}

export default SiteHaritasiItem