import * as React from 'react';
import * as Icon from 'react-bootstrap-icons';
import './SiteReklam.css';

const SiteReklam = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-4 text-center" id="badges1">
                    <span id="" className="badge siteReklam">
                        <Icon.PeopleFill style={{ fontSize: "25px" }} />
                        <span> %100 MÜŞTERİ MEMNUNİYETİ</span>
                    </span>
                    <span id="" className="badge siteReklam">
                        <Icon.BoxSeam style={{ fontSize: "25px" }} />
                        <span> AYNI GÜN TESLİMAT</span>
                    </span>
                    <span id="" className="badge siteReklam">
                        <Icon.Truck style={{ fontSize: "25px" }} />
                        <span> 100TL ÜZERİ ÜCRETSİZ KARGO</span>
                    </span>
                    <span id="" className="badge siteReklam">
                        <Icon.ArrowCounterclockwise style={{ fontSize: "25px" }} />
                        <span> KOLAY İADE</span>
                    </span>
                </div>
            </div>
        </div>
        )
}

export default SiteReklam