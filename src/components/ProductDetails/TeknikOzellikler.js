import React, { useEffect } from 'react';
import './TeknikOzellikler.css';
import $ from "jquery";
import {connect} from 'react-redux'
import TeknikOzellikItem from './TeknikOzellikItem';

const TeknikOzellikler = (props) => {
    
    useEffect(() => {
       islem();
    }, [])

    function islem(){

        $("#urunAciklamasiIcerik").show();

        $("#urunAciklamasi, #urunAciklamasi > a").css({

            "background-color": "white",
            "color": "rgb(255, 123, 0)",
            "border-top": "1px solid rgb(255, 123, 0)"

        });

        $("#teknikOzellikler").css({

            "border-right": "1px solid white",
            "border-left": "1px solid white"


        });

        $("#urunAciklamasi").click(function () {

            $("#teknikOzelliklerIcerik").hide();
            $("#taksitSecenekleriIcerik").hide();
            $("#urunAciklamasiIcerik").show();

            $("#urunAciklamasi, #urunAciklamasi > a").css({

                "background-color": "white",
                "color": "rgb(255, 123, 0)",
                "border-top": "1px solid rgb(255, 123, 0)"

            });

            $("#teknikOzellikler, #teknikOzellikler > a, #taksitSecenekleri, #taksitSecenekleri > a").css({

                "background-color": "rgb(163, 155, 139)",
                "color": "#fff",
                "border-top": "0"

            });

        });

        $("#teknikOzellikler").click(function () {

            $("#urunAciklamasiIcerik").hide();
            $("#taksitSecenekleriIcerik").hide();
            $("#teknikOzelliklerIcerik").show();

            $("#teknikOzellikler, #teknikOzellikler > a").css({

                "background-color": "white",
                "color": "rgb(255, 123, 0)",
                "border-top": "1px solid rgb(255, 123, 0)"

            });

            $("#urunAciklamasi, #urunAciklamasi > a, #taksitSecenekleri, #taksitSecenekleri > a").css({

                "background-color": "rgb(163, 155, 139)",
                "color": "#fff",
                "border-top": "0"

            });

        });

        $("#taksitSecenekleri").click(function () {

            $("#urunAciklamasiIcerik").hide();
            $("#teknikOzelliklerIcerik").hide();
            $("#taksitSecenekleriIcerik").show();

            $("#taksitSecenekleri, #taksitSecenekleri > a").css({

                "background-color": "white",
                "color": "rgb(255, 123, 0)",
                "border-top": "1px solid rgb(255, 123, 0)"

            });

            $("#teknikOzellikler, #teknikOzellikler > a, #urunAciklamasi, #urunAciklamasi > a").css({

                "background-color": "rgb(163, 155, 139)",
                "color": "#fff",
                "border-top": "0"

            });

        });
    }

    return (
         <div className="container">
            <div className="row">
                    <div className="col-md-12" id="teknikOzelliklerTabMenuSutun">
                        <ul id="teknikOzelliklerTabMenu">
                            <li className="teknikOzelliklerTabMenuItem" id="urunAciklamasi">
                                <a className="teknikOzelliklerTabMenuLink" href="/#" onClick={(e)=>e.preventDefault()}>Ürün Açıklaması</a>                   
                            </li>
                            <li className="teknikOzelliklerTabMenuItem" id="teknikOzellikler">
                                <a className="teknikOzelliklerTabMenuLink"href="/#" onClick={(e)=>e.preventDefault()}>Teknik Özellikler</a>
                            </li>
                            <li className="teknikOzelliklerTabMenuItem" id="taksitSecenekleri">
                                <a className="teknikOzelliklerTabMenuLink" href="/#" onClick={(e)=>e.preventDefault()}>Taksit Seçenekleri</a>
                            </li>              
                        </ul>
                        <div id="teknikOzelliklerIcerikKismi">
                            <div id="urunAciklamasiIcerik">                    
                                <div id="urunAciklamasiIcerikBaslikAlan">
                                <span className="h3">{props.urunAciklamalari.urunAciklamaBaslik!=='undefined'?props.urunAciklamalari.urunAciklamaBaslik:""}</span>
                                </div>
                                <div id="urunAciklamasiIcerikYaziAlan">
                                    <span id="urunAciklamasiIcerikYaziSpan">{props.urunAciklamalari.urunEkAciklama!=='undefined'?props.urunAciklamalari.urunEkAciklama:""}</span>
                                    <p id="urunAciklamasiIcerikYaziParagraf">{props.urunAciklamalari.urunAciklamaIcerik!=='undefined'?props.urunAciklamalari.urunAciklamaIcerik:""}
                                    </p>
                                </div>
                            </div>
                            <div id="teknikOzelliklerIcerik">              
                            <table className="table">                      
                                <tbody>
                                    {props.urunTeknikOzellikleri!==""?                                       
                                        props.urunTeknikOzellikleri.$values.map((teknikOzellik, index)=>{
                                            return <TeknikOzellikItem key={index} {...teknikOzellik} />                                          
                                        })
                                        :<tr><td></td></tr>
                                    }
                                    </tbody>
                            </table>
                            </div>
                            <div id="taksitSecenekleriIcerik">
                                <div className="row" id="taksitSecenekleriIcerikSatir">                                      
                                    <div className="col-md-4 pb-3">
                                        <div className="taksitSecenekleriIcerikFotoAlan">
                                            <img className="taksitSecenekleriIcerikFoto" src={require('./TeknikOzelliklerImg/credit-card-Axess.png').default} alt="axessLogo" />
                                        </div>
                                        <div className="taksitSecenekleriBaslikveYazilari">
                                            <div className="taksitSecenekleriIcerikBasligi">
                                                <div>
                                                    <span>TAKSİT SAYISI</span>
                                                </div>
                                                <div>
                                                    <span>AYLIK TUTAR</span>
                                                </div>
                                                <div>
                                                    <span>TOPLAM</span>
                                                </div>                                   
                                            </div>
                                            <div className="taksitSecenekleriIcerikYazisi">
                                                <div>
                                                    <span>1</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>     
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 pb-3">
                                        <div className="taksitSecenekleriIcerikFotoAlan">
                                        <img className="taksitSecenekleriIcerikFoto" src={require('./TeknikOzelliklerImg/credit-card-Bonus.png').default} alt=""/>
                                        </div>
                                        <div className="taksitSecenekleriBaslikveYazilari">
                                            <div className="taksitSecenekleriIcerikBasligi">
                                                <div>
                                                    <span>TAKSİT SAYISI</span>
                                                </div>
                                                <div>
                                                    <span>AYLIK TUTAR</span>
                                                </div>
                                                <div>
                                                    <span>TOPLAM</span>
                                                </div>                                   
                                            </div>
                                            <div className="taksitSecenekleriIcerikYazisi">
                                                <div>
                                                    <span>1</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>     
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 pb-3">
                                        <div className="taksitSecenekleriIcerikFotoAlan">
                                        <img className="taksitSecenekleriIcerikFoto" src={require('./TeknikOzelliklerImg/credit-card-Cardfinans.png').default} alt=""/>
                                        </div>
                                        <div className="taksitSecenekleriBaslikveYazilari">
                                            <div className="taksitSecenekleriIcerikBasligi">
                                                <div>
                                                    <span>TAKSİT SAYISI</span>
                                                </div>
                                                <div>
                                                    <span>AYLIK TUTAR</span>
                                                </div>
                                                <div>
                                                    <span>TOPLAM</span>
                                                </div>                                   
                                            </div>
                                            <div className="taksitSecenekleriIcerikYazisi">
                                                <div>
                                                    <span>1</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>     
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 pb-3">
                                        <div className="taksitSecenekleriIcerikFotoAlan">
                                        <img className="taksitSecenekleriIcerikFoto" src={require('./TeknikOzelliklerImg/credit-card-World.png').default} alt=""/>
                                        </div>
                                        <div className="taksitSecenekleriBaslikveYazilari">
                                            <div className="taksitSecenekleriIcerikBasligi">
                                                <div>
                                                    <span>TAKSİT SAYISI</span>
                                                </div>
                                                <div>
                                                    <span>AYLIK TUTAR</span>
                                                </div>
                                                <div>
                                                    <span>TOPLAM</span>
                                                </div>                                   
                                            </div>
                                            <div className="taksitSecenekleriIcerikYazisi">
                                                <div>
                                                    <span>1</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>     
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 pb-3">
                                        <div className="taksitSecenekleriIcerikFotoAlan">
                                        <img className="taksitSecenekleriIcerikFoto" src={require('./TeknikOzelliklerImg/credit-card-Bankkart.png').default} alt="" />
                                        </div>
                                        <div className="taksitSecenekleriBaslikveYazilari">
                                            <div className="taksitSecenekleriIcerikBasligi">
                                                <div>
                                                    <span>TAKSİT SAYISI</span>
                                                </div>
                                                <div>
                                                    <span>AYLIK TUTAR</span>
                                                </div>
                                                <div>
                                                    <span>TOPLAM</span>
                                                </div>                                   
                                            </div>
                                            <div className="taksitSecenekleriIcerikYazisi">
                                                <div>
                                                    <span>1</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>     
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 pb-3">
                                        <div className="taksitSecenekleriIcerikFotoAlan">
                                        <img className="taksitSecenekleriIcerikFoto" src={require('./TeknikOzelliklerImg/credit-card-Maximum.png').default}alt="maximumLogo" />
                                        </div>
                                        <div className="taksitSecenekleriBaslikveYazilari">
                                            <div className="taksitSecenekleriIcerikBasligi">
                                                <div>
                                                    <span>TAKSİT SAYISI</span>
                                                </div>
                                                <div>
                                                    <span>AYLIK TUTAR</span>
                                                </div>
                                                <div>
                                                    <span>TOPLAM</span>
                                                </div>                                   
                                            </div>
                                            <div className="taksitSecenekleriIcerikYazisi">
                                                <div>
                                                    <span>1</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>     
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 pb-3">
                                        <div className="taksitSecenekleriIcerikFotoAlan">
                                        <img className="taksitSecenekleriIcerikFoto" src={require('./TeknikOzelliklerImg/credit-card-Paraf.png').default} alt="parafLogo" />
                                        </div>
                                        <div className="taksitSecenekleriBaslikveYazilari">
                                            <div className="taksitSecenekleriIcerikBasligi">
                                                <div>
                                                    <span>TAKSİT SAYISI</span>
                                                </div>
                                                <div>
                                                    <span>AYLIK TUTAR</span>
                                                </div>
                                                <div>
                                                    <span>TOPLAM</span>
                                                </div>                                   
                                            </div>
                                            <div className="taksitSecenekleriIcerikYazisi">
                                                <div>
                                                    <span>1</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>     
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

const mapStateToProps = (state) =>{    
    return {
        urunTeknikOzellikleri:state.urunDetaylari.urunlerTeknikOzellikler || "",
        urunAciklamalari:{
            urunAciklamaBaslik:state.urunDetaylari.urunAciklamaBaslik,
            urunAciklamaIcerik:state.urunDetaylari.urunAciklamaIcerik,
            urunEkAciklama:state.urunDetaylari.urunEkAciklama
        }
    }
}

export default connect(mapStateToProps)(TeknikOzellikler)