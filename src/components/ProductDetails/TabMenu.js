import React, { useEffect } from 'react';
import * as Icon from 'react-bootstrap-icons'
import $ from "jquery";

const TabMenu = () => {

    useEffect(() => {
        tabMenuJs();
     }, [])

    function tabMenuJs(){

        $("#tab1icerik").show();

        $("#tab1, #tab1 > a").css({
    
            "background-color": "rgb(243, 243, 243)",
            "color": "rgb(255, 123, 0)"
    
        });
    
        $("#tab1").mouseenter(function () {
    
            $("#tab2icerik").hide();
            $("#tab3icerik").hide();
            $("#tab1icerik").show();
    
            $("#tab2, #tab2 > a, #tab3, #tab3 > a").css({
    
                "background-color": "#fff",
                "color": "rgb(177, 171, 159)"
    
            });
    
        });
    
        $("#tab1").mouseout(function () {
    
            $("#tab1, #tab1 > a").css({
    
                "background-color": "rgb(243, 243, 243)",
                "color": "rgb(255, 123, 0)"
    
            });
    
        });
    
        $("#tab2").mouseenter(function () {
    
            $("#tab1icerik").hide();
            $("#tab3icerik").hide();
            $("#tab2icerik").show();
    
            $("#tab1, #tab1 > a, #tab3, #tab3 > a").css({
    
                "background-color": "#fff",
                "color": "rgb(177, 171, 159)"
    
            });
    
        });
    
        $("#tab2").mouseout(function () {
    
            $("#tab2, #tab2 > a").css({
    
                "background-color": "rgb(243, 243, 243)",
                "color": "rgb(255, 123, 0)"
    
            });
    
        });
    
        $("#tab3").mouseenter(function () {
    
            $("#tab1icerik").hide();
            $("#tab2icerik").hide();
            $("#tab3icerik").show();
    
            $("#tab2, #tab2 > a, #tab1, #tab1 > a").css({
    
                "background-color": "#fff",
                "color": "rgb(177, 171, 159)"
    
            });
    
        });
    
        $("#tab3").mouseout(function () {
    
            $("#tab3, #tab3 > a").css({
    
                "background-color": "rgb(243, 243, 243)",
                "color": "rgb(255, 123, 0)"
    
            });
    
        });
    }
    
    return (
    <div className="row">
        <div className="col-md-12" id="tabMenuSutun">
            <ul id="TabMenu">
                <li id="tab1" className="tabMenuItem">
                    <a className="tabMenuLink" href="/#">
                        <div className="tabMenuLinkIconAlan">
                            <Icon.Truck className="tabMenuLinkIcon" />
                        </div>
                        <div className="tabMenuLinkYaziAlan">
                            <span className="tabMenuLinkYazi">Ayn?? G??n Teslimat</span>
                        </div>
                    </a>                    
                </li>
                <li className="tabMenuItem" id="tab2">
                    <a className="tabMenuLink" href="/#">
                        <div className="tabMenuLinkIconAlan">
                            <Icon.ArrowRepeat className="tabMenuLinkIcon" />
                        </div>
                        <div className="tabMenuLinkYaziAlan">
                            <span className="tabMenuLinkYazi">Kolay ??ade</span>
                        </div>                                     
                    </a>
                </li>
                <li className="tabMenuItem" id="tab3">
                    <a className="tabMenuLink" href="/#">
                        <div className="tabMenuLinkIconAlan">
                            <Icon.HourglassSplit className="tabMenuLinkIcon" />
                        </div>
                        <div className="tabMenuLinkYaziAlan">
                            <span className="tabMenuLinkYazi">Kargo S??resi</span>
                        </div>     
                    </a>
                </li>               
            </ul>
            <div id="tabMenuIcerikler">                              
                <div className="tabMenuIcerik" id="tab1icerik">                                                                                                                       
                    <span className="tabMenuYazi"><Icon.CheckLg className="tabMenuIcon" /> ???AYNI G??N TESL??MAT??? teslimat ad??m??nda Bug??n! Sizde teslimat se??ene??i olan ??r??nlerde 12:00???a kadar verilen sipari??lerde ge??erlidir.</span>
                </div>
                <div className="tabMenuIcerik" id="tab2icerik">                                
                    <span className="tabMenuYazi"><Icon.CheckLg className="tabMenuIcon" /> Teslim tarihinden itibaren 21 g??n i??erisinde ??r??n??n??z?? isterseniz anla??mal?? kargo firmalar?? ile depomuza ??cretsiz g??nderebilir ya da ma??azalar??m??za iade edebilirsiniz.</span>
                </div>
                <div className="tabMenuIcerik" id="tab3icerik">
                    <span className="tabMenuYazi"><Icon.CheckLg className="tabMenuIcon" /> Standart teslimat ile hafta i??i saat 14:00'a kadar verilen sipari??ler ayn?? g??n, hafta i??i 14:00'dan sonra verilen sipari??ler ve hafta sonu verilen sipari??ler bir sonraki i?? g??n?? kargoya verilir.</span>
                </div>
            </div>
        </div>
    </div>

        )
}

export default TabMenu