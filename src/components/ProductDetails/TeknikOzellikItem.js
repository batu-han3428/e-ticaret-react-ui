import React from 'react'

const TeknikOzellikItem = (props) => {  
    return (
        <>
            <tr>
                <td className="teknikOzelliklerIcerikTabloBaslik"><h5>{props.teknikOzelliklerAnaBaslik.anaBaslik}</h5></td>
                <td></td>
            </tr>
            {props.teknikOzelliklerAnaBaslik.teknikOzellikler.$values.map((altBilgiler, index)=>{
                return<tr key={index}>
                    <td className="teknikOzelliklerIcerikTabloYaziSutun">
                        <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                            <span>{altBilgiler.teknikOzelliklerAltBaslik}</span>
                        </div>
                        <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                            <span>{altBilgiler.teknikOzellikDegerleri}</span>
                        </div>
                    </td>
                    <td></td> 
                </tr>       
            })}
        </>
    )
}

export default TeknikOzellikItem
