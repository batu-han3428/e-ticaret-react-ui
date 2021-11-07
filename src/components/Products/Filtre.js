import React from 'react';
import {connect} from 'react-redux';

const Filtre = (props) => {
    return (
        <div className="row">
            <div className="col-md-12 p-4" id="icerikEnUst">
                <div className="me-auto">
                    <span><b>{props.pathname[0].toUpperCase() + props.pathname.substring(1)}</b> için {props.toplamUrunSayisi} ürün bulundu</span>
                </div>
                <div id="filtreBuyukEkran">
                    <select defaultValue={'0'} className="form-select form-select-sm p-2">
                        <option value="default" disabled>Seçiniz...</option>
                        <option value="0">En Popüler</option>
                        <option value="1">İsme Göre (A-Z)</option>
                        <option value="2">İsme Göre (Z-A)</option>
                        <option value="3">Fiyata Göre (Artan)</option>
                        <option value="4">Fiyata Göre (Azalan)</option>
                        <option value="5">İndirimli Ürünler</option>
                    </select>
                </div>
            </div>
        </div>
        )
}

const mapStateToProps = (state) =>{  
    return {
        toplamUrunSayisi:state.urunBilgileri.toplamUrunSayisi    
    }
}

export default connect(mapStateToProps)(Filtre);