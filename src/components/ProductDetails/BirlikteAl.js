import React from 'react';
import * as Icon from 'react-bootstrap-icons'

const BirlikteAl = () => {
    return (
            <div className="row mt-3 p-3" >
                <div className="col-md-12">
                    <div className="row p-2 border" id="birlikteAlSatir">
                        <div className="col-5">
                            <div className="birlikteAlFotoAlan">
                                <img className="birlikteAlFoto" src={require('./BirlikteAlImg/34867488.png').default} alt="xiomiNote8" />       
                            </div>
                            <div className="birlikteAlBaslikTopveFiyatlarAlan">
                                <div className="birlikteAlBaslikAlan">
                                    <span className="birlikteAlBaslik h6">Xiaomi Redmi Note 8 4GB/64GB Mavi Akıllı Telefon</span>
                                </div>
                                <div className="birlikteAlTopveFiyatlar">           
                                    <div style={{display: "none"}} className="birlikteAlTop">
                                        <span className="birlikteAlTopYazi">%9 İndirim</span>
                                    </div>                                              
                                    <div className="birlikteAlFiyatlar">
                                        <span className="birlikteAlAsilFiyat" >2.999 TL</span>
                                        <span style={{display: "none"}} className="birlikteAlIndirim">3.099 TL</span>
                                        <span style={{display: "none"}} className="birlikteAlIndirimliFiyat">2.999 TL</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div id="birlikteAlIconAlan">
                                <Icon.PlusLg size={22} id="birlikteAlIcon" />
                            </div>
                        </div>
                        <div className="col-5" >
                            <div className="birlikteAlFotoAlan">
                                <img className="birlikteAlFoto" src={require('./BirlikteAlImg/49290160.png').default} alt="xiomiNote8"/>
                            </div>
                            <div className="birlikteAlBaslikTopveFiyatlarAlan">
                                <div className="birlikteAlBaslikAlan">
                                    <span className="birlikteAlBaslik h6">Preo Tpu Case Xiaomi Redmi Note 8 Polikarbon Telefon Kılıfı Şeffaf</span>
                                </div>
                                <div className="birlikteAlTopveFiyatlar">           
                                    <div className="birlikteAlTop">
                                        <span className="birlikteAlTopYazi">%15 İndirim</span>
                                    </div>                                              
                                    <div className="birlikteAlFiyatlar">
                                        <span style={{display: "none"}} className="birlikteAlAsilFiyat" ></span>
                                        <span className="birlikteAlIndirim">49,90 TL</span>
                                        <span className="birlikteAlIndirimliFiyat">42,41 TL</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-2 border border-top-0" id="birlikteAlUcretSatir">
                        <div className="col-6" id="birlikteAlUcretBilgileriSutun">
                            <div id="birlikteAlUcretBilgileri">
                                <span id="birlikteAlToplamUrun" >Toplam:<b id="birlikteAlToplamUrunSayi"> 2 (Ürün)</b></span>
                                <span id="birlikteAlToplamKazanc" >Toplam&nbsp;Kazancınız:<b>&nbsp;7.49&nbsp;TL</b></span>
                                <span id="birlikteAlToplamKazancIndirim">3.048,90 TL</span>
                                <span id="birlikteAlToplamKazancIndirimliFiyat">3.041,41 TL</span> 
                            </div>                                                                   
                        </div>
                        <div className="col-6" id="birlikteAlUcretBilgileriButonSutun">
                            <button type="button" className="btn btn-success" id="birlikteAlButon">
                                <div>
                                    <Icon.CartFill id="birlikteAlIcon2" />
                                </div>                                                                    
                                <div>
                                    <span id="birlikteAlYazi">Birlikte Al</span>
                                </div>  
                            </button>
                        </div>
                    </div>                               
                </div>
            </div>          
        )
}

export default BirlikteAl