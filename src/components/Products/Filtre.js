import React from 'react';
import {connect} from 'react-redux';
import { endloading, startloading } from '../../action/loading';
import axios from 'axios'
import { listProducts, resetstate } from '../../action/urunler';
import { orderBy } from '../../action/orderby';
import { activepage } from '../../action/pagination';

const Filtre = (props) => {
 
    const sirala = (e) =>{
        window.scroll(0,200);     
        props.dispatch(startloading())         
      
        axios.get(`https://localhost:5001/api/Urunler/UrunGetir/${props.pathname}?Siralama=${e.target.value}&PageNumber=1`,).then(res => {
            props.dispatch(listProducts({
                products: res.data.urunler,
                totalProduct : res.data.toplamUrunSayisi
            })) 
            
            props.dispatch(orderBy({
                orderby:e.target.value
            }))

            props.dispatch(activepage({
                active:1
            }))
        }).finally(() => {            
            props.dispatch(endloading())  
        });

        props.dispatch(resetstate())
        props.dispatch(startloading())
    }
    return (
        <div className="row">
            <div className="col-md-12 p-4" id="icerikEnUst">
                <div className="me-auto">
                    <span><b>{props.pathname[0].toUpperCase() + props.pathname.substring(1)}</b> için {props.toplamUrunSayisi} ürün bulundu</span>
                </div>
                <div id="filtreBuyukEkran">
                    <select onChange={sirala} defaultValue={'default'} className="form-select form-select-sm p-2">
                        <option value="default" disabled>Seçiniz...</option>
                        <option value="enpopuler">En Popüler</option>
                        <option value="a-z">İsme Göre (A-Z)</option>
                        <option value="z-a">İsme Göre (Z-A)</option>
                        <option value="artanfiyat">Fiyata Göre (Artan)</option>
                        <option value="azalanfiyat">Fiyata Göre (Azalan)</option>
                        <option value="indirimliurunler">İndirimli Ürünler</option>
                    </select>
                </div>
            </div>
        </div>
        )
}

const mapStateToProps = (state) =>{ 
    return {
        toplamUrunSayisi:state.urunBilgileri.toplamUrunSayisi,
        page:state.pagination.active    
    }
}

export default connect(mapStateToProps)(Filtre);