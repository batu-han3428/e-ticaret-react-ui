import * as React from 'react';
import * as Icon from 'react-bootstrap-icons'

const SepeteEkle = () => {
    return (      
            <div>
                <button className="btn btn-warning" id="sepeteEkleButon"  data-bs-target="#sepeteEkleModal" data-bs-toggle="modal">
                    <div>
                        <Icon.CartFill id="sepeteEkleIcon2" />
                    </div>                                                                    
                    <div>
                        <span id="sepeteEkleYazi">Sepete Ekle</span>
                    </div>  
                </button>
                <div className="modal fade" id="sepeteEkleModal">                                
                    <div className="modal-dialog modal-dialog-centered">                                      
                        <div className="modal-content">
                            <div className="modal-header">
                                <div id="stokAlan">
                                    <div id="stokIconAlan">
                                        <Icon.CheckLg id="stokIcon"/>
                                    </div>
                                    <div id="stokYaziAlan">
                                        <span id="stokYazi">1 Ürün Sepete Eklendi</span>
                                    </div>
                                </div>
                                <button className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row" >
                                    <div className="col-md-12" style={{display: "flex"}}>
                                        <div id="sepeteEkleFotoAlan">
                                            <img id="sepeteEkleFoto" src={require('./SepeteEkleImg/34867488.png').default} alt="xiomiNote8" />        
                                        </div>
                                        <div id="sepeteEkleBaslikTopveFiyatlarAlan">
                                            <div id="sepeteEkleBaslikAlan">
                                                <span id="sepeteEkleBaslik" className="h6">Xiaomi Redmi Note 8 4GB/64GB Mavi Akıllı Telefon</span>
                                            </div>
                                            <div id="sepeteEkleTopveFiyatlar">           
                                                <div id="sepeteEkleTop">
                                                    <span id="sepeteEkleTopYazi">%9 İndirim</span>
                                                </div>                                              
                                                <div id="sepeteEkleFiyatlar">
                                                    <span style={{ display: "none" }} >2.999 TL</span>
                                                    <span  id="sepeteEkleIndirim">3.099 TL</span>
                                                    <span  id="sepeteEkleIndirimliFiyat">2.999 TL</span> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>          
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-warning" id="sepeteEkleModalButon" data-bs-dismiss="modal">
                                    <div>     
                                        <Icon.CartFill id="sepeteEkleModalIcon" />
                                    </div>                                                                    
                                    <div>
                                        <span id="sepeteEkleModalYazi">Alışverişi Devam Et</span>
                                    </div>  
                                </button>
                                <button className="btn btn-warning" id="sepeteEkleModalButon" type="button">
                                    <div>                 
                                        <Icon.CheckLg id="sepeteEkleModalIcon" />
                                    </div>                                                                    
                                    <div>
                                        <span id="sepeteEkleModalYazi">Alışverişi Tamamla</span>
                                    </div>  
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                          
        )
}

export default SepeteEkle