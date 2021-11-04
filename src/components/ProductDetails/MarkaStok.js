import * as React from 'react';
import * as Icon from 'react-bootstrap-icons'

const MarkaStok = () => {
    return (
                <div className="row">
                    <div className="col-md-12" id="markaStokSutun">
                            
                        {/*<!-- Marka -->*/}
                        <div id="MarkaAlan">
                            <img id="Marka" src={require('./MarkaStokImg/8885287551026.png').default} alt="xiomilogo"/>
                        </div>
                        {/*<!-- /Marka -->*/}

                        {/*<!-- Stok -->*/}
                        <div id="stokAlan">
                            <div id="stokIconAlan">
                                <Icon.CheckLg id="stokIcon" />
                            </div>
                            <div id="stokYaziAlan">
                                <span id="stokYazi">Stokta Var</span>
                            </div>
                        </div>
                        {/*<!-- /Stok -->*/}
                            
                    </div>                           
                </div>
        )
}

export default MarkaStok