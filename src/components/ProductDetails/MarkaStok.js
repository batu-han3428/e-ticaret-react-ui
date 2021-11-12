import React from 'react';
import * as Icon from 'react-bootstrap-icons'
import {connect} from 'react-redux'

const MarkaStok = (props) => {
    
    return (
        <div className="row">
            <div className="col-md-12" id="markaStokSutun">
                    
                {/*<!-- Marka -->*/}
                <div id="MarkaAlan">
                    {props.urunMarkaFotograf!==""?<img id="Marka" src={require(`../Products${props.urunMarkaFotograf}`).default} alt="xiomilogo"/>:""} 
                </div>
                {/*<!-- /Marka -->*/}

                {/*<!-- Stok -->*/}
                <div id="stokAlan">
                {props.urunStok>0?
                    <>
                        <div id="stokIconAlan">                       
                            <Icon.CheckLg id="stokIcon" />
                        </div>
                        <div id="stokYaziAlan">
                            <span id="stokYazi">Stokta Var</span>
                        </div>
                    </>:
                    <>
                        <div id="stokIconAlan" className="bg-danger">                       
                            <Icon.X id="stokIcon" style={{margin:"1px auto"}} />
                        </div>
                        <div id="stokYaziAlan">
                            <span id="stokYazi" className="text-danger">Stokta Yok</span>
                        </div>
                    </>
                }
                </div>
                {/*<!-- /Stok -->*/}
                    
            </div>                           
        </div>
        )
}

const mapStateToProps = (state) =>{      
    return {
        urunMarkaFotograf:state.urunDetaylari.markaFotograf || "",
        urunStok:state.urunDetaylari.stok || 0
    }
}

export default connect(mapStateToProps)(MarkaStok)