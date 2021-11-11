import React from 'react';
import './UrunFotograf.css';
import * as Icon from 'react-bootstrap-icons';
import {connect} from 'react-redux'
import Loader from '../Loader/Loader';
import UrunFotografItem from './UrunFotografItem';
import UrunFotografButtons from './UrunFotografButtons';


const UrunFotograf = (props) => {

    return (
        <div className="col-md-6 border-end" id="ucretsizKargoUrunFotografSutun">

            {/*Ücretsiz Kargo*/}
            <div style={{ marginTop: "10px" }}>
                <div id="ucretsizKargo">
                    <div id="ucretsizKargoIconAlan">
                        <Icon.Truck id="ucretsizKargoIcon" />
                    </div>
                    <div id="ucretsizKargoYaziAlan">
                        <span id="ucretsizKargoYazi">Ücretsiz Kargo</span>
                    </div>
                </div>
            </div>
            {/*Ücretsiz Kargo */}
            {props.loading===true?
                <>
                <Loader/>
                </>: 
                
                <>
                {props.urunDetay.ad}
                {/*Ürün Fotoğraf*/}
                <div id="KontrolTusuTetikle1" className="carousel slide slider1">
                    <div className="carousel-inner">
                        {props.urunDetay.detayFotograflar.$values.map((photo, index)=>{
                            return <UrunFotografItem key={photo.id} {...photo} index={index} />}) 
                        }                         
                    </div>
                    <div className="col-md-12" id="tuslar">
                        <div>
                        {props.urunDetay.detayFotograflar.$values.map((photo, index)=>{
                            return <UrunFotografButtons key={photo.id} {...photo} index={index} />}) 
                        }        
                        </div>                  
                    </div>
                </div>
                {/*Ürün Fotoğraf*/}
                </>
            } 
        </div>
        )
}

const mapStateToProps = (state) =>{  
    return {
        urunDetay:state.urunDetaylari,
        loading:state.loader    
    }
}

export default connect(mapStateToProps)(UrunFotograf)