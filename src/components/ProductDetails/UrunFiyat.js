import React from 'react'
import {connect} from 'react-redux'

const UrunFiyat = (props) =>{
    return (
        <div id="urunFiyatTopveFiyatlar">
            {props.urunFiyatlari.indirimliFiyat>0?
                <>
                    <div id="urunFiyatTop">
                        <span id="urunFiyatTopYazi">%{props.urunFiyatlari.indirimYuzde} İndirim</span>
                    </div>
                    <div id="urunFiyatFiyatlar">
                        <span id="urunFiyatIndirim">{props.urunFiyatlari.fiyat} TL</span>
                        <span id="urunFiyatIndirimliFiyat">{props.urunFiyatlari.indirimliFiyat} TL</span>
                    </div>
                </>:              
                <div id="urunFiyatFiyatlar">
                    <span id="urunFiyatAsilFiyati">{props.urunFiyatlari.fiyat} TL</span>
                </div>               
            }
        </div>
        )
}

const mapStateToProps = (state) =>{     
    console.log(state); 
    return {
        urunFiyatlari:state.urunDetaylari || ""
    }
}

export default connect(mapStateToProps)(UrunFiyat)