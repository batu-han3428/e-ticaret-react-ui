import * as React from 'react';
import * as Icon from 'react-bootstrap-icons'
import './TabMenuJs.js';

const TabMenu = () => {
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
                            <span className="tabMenuLinkYazi">Aynı Gün Teslimat</span>
                        </div>
                    </a>                    
                </li>
                <li className="tabMenuItem" id="tab2">
                    <a className="tabMenuLink" href="/#">
                        <div className="tabMenuLinkIconAlan">
                            <Icon.ArrowRepeat className="tabMenuLinkIcon" />
                        </div>
                        <div className="tabMenuLinkYaziAlan">
                            <span className="tabMenuLinkYazi">Kolay İade</span>
                        </div>                                     
                    </a>
                </li>
                <li className="tabMenuItem" id="tab3">
                    <a className="tabMenuLink" href="/#">
                        <div className="tabMenuLinkIconAlan">
                            <Icon.HourglassSplit className="tabMenuLinkIcon" />
                        </div>
                        <div className="tabMenuLinkYaziAlan">
                            <span className="tabMenuLinkYazi">Kargo Süresi</span>
                        </div>     
                    </a>
                </li>               
            </ul>
            <div id="tabMenuIcerikler">                              
                <div className="tabMenuIcerik" id="tab1icerik">                                                                                                                       
                    <span className="tabMenuYazi"><Icon.CheckLg className="tabMenuIcon" /> “AYNI GÜN TESLİMAT” teslimat adımında Bugün! Sizde teslimat seçeneği olan ürünlerde 12:00’a kadar verilen siparişlerde geçerlidir.</span>
                </div>
                <div className="tabMenuIcerik" id="tab2icerik">                                
                    <span className="tabMenuYazi"><Icon.CheckLg className="tabMenuIcon" /> Teslim tarihinden itibaren 21 gün içerisinde ürününüzü isterseniz anlaşmalı kargo firmaları ile depomuza ücretsiz gönderebilir ya da mağazalarımıza iade edebilirsiniz.</span>
                </div>
                <div className="tabMenuIcerik" id="tab3icerik">
                    <span className="tabMenuYazi"><Icon.CheckLg className="tabMenuIcon" /> Standart teslimat ile hafta içi saat 14:00'a kadar verilen siparişler aynı gün, hafta içi 14:00'dan sonra verilen siparişler ve hafta sonu verilen siparişler bir sonraki iş günü kargoya verilir.</span>
                </div>
            </div>
        </div>
    </div>

        )
}

export default TabMenu