import React from 'react'
import * as Icon from 'react-bootstrap-icons'
import { endloading, startloading } from '../../action/loading';
import axios from 'axios'
import { listProducts, resetstate } from '../../action/urunler';
import { orderBy } from '../../action/orderby';
import { activepage } from '../../action/pagination';
import {connect} from 'react-redux';

const FiltrelemeSiralaMobil = (props) => {

    console.log(props);
    const siralaMobil = (siralamaAd) =>{
        
        window.scroll(0,200);     
        props.dispatch(startloading())         
      
        axios.get(`https://localhost:5001/api/Urunler/UrunGetir/${props.pathname}?Siralama=${siralamaAd}&PageNumber=1`,).then(res => {
            props.dispatch(listProducts({
                products: res.data.urunler,
                totalProduct : res.data.toplamUrunSayisi
            })) 
            
            props.dispatch(orderBy({
                orderby:siralamaAd
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
        <div className="filtreDiv">
            <button className="filtreButon" data-bs-target="#modalPopuler" data-bs-toggle="modal">
                <span className="filtreYazi">Listeleme Seçenekleri</span>
                <Icon.CardList className="filtreIcon" />
            </button>
            <div className="modal fade" id="modalPopuler">                          
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header d-flex">
                            <h4 className="modal-title ms-auto">Listeleme&nbsp;Seçenekleri</h4>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body" id="listelemeModalBody">
                            <button onClick={()=>siralaMobil('enpopuler')} className="listelemeButon" type="button">
                                <Icon.StarFill className="listelemeIcon" /><span>En Popüler</span>
                            </button>
                            <button onClick={()=>siralaMobil('a-z')} className="listelemeButon" type="button">
                                <Icon.SortAlphaDown className="listelemeIcon" /><span>İsme Göre (A-Z)</span>
                            </button>
                            <button onClick={()=>siralaMobil('z-a')} className="listelemeButon" type="button">
                                <Icon.SortAlphaUp className="listelemeIcon" /><span>İsme Göre (Z-A)</span>
                            </button>
                            <button onClick={()=>siralaMobil('artanfiyat')} className="listelemeButon" type="button">
                                <Icon.SortNumericUpAlt className="listelemeIcon" /><span>Fiyata Göre (Artan)</span>
                            </button>
                            <button onClick={()=>siralaMobil('azalanfiyat')} className="listelemeButon" type="button">
                                <Icon.SortNumericDownAlt className="listelemeIcon" /><span>Fiyata Göre (Azalan)</span>
                            </button>
                            <button onClick={()=>siralaMobil('indirimliurunler')} className="listelemeButon" type="button">
                                <Icon.PiggyBankFill className="listelemeIcon" /><span>İndirimli Ürünler</span>
                            </button>
                        </div>
                    </div>
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

export default connect(mapStateToProps)(FiltrelemeSiralaMobil);