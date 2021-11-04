import * as React from 'react';
import './OdemeSecenekleri.css'

const OdemeSecenekleri = () => {
    return (
        <div className="container" id="odemeAlanContainer">
            <div className="row mt-5">
                <div className="col-md-12">
                    <span id="odemeBaslik">Ödeme Seçenekleri</span>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-12 px-5" id="odemeAlanSutun">
                    <div id="" className="odemeAlan">
                        <div className="odemeFoto" style={{ backgroundImage: ` url(${require('./OdemeSecenekleriImg/credit-card-axess.webp').default})` }}></div>
                        <div className="odemeYazi">
                            <span>12 TAKSİT</span>
                        </div>
                    </div>
                    <div className="odemeBorder"></div>
                    <div id="" className="odemeAlan">
                        <div className="odemeFoto" style={{ backgroundImage: ` url(${require('./OdemeSecenekleriImg/credit-card-world.webp').default})` }}></div>
                        <div className="odemeYazi">
                            <span>12 TAKSİT</span>
                        </div>
                    </div>
                    <div className="odemeBorder"></div>
                    <div id="" className="odemeAlan">
                        <div className="odemeFoto" style={{ backgroundImage: ` url(${require('./OdemeSecenekleriImg/credit-card-paraf.webp').default})` }}></div>
                        <div className="odemeYazi">
                            <span>6 TAKSİT</span>
                        </div>
                    </div>
                    <div className="odemeBorder"></div>
                    <div id="" className="odemeAlan">
                        <div className="odemeFoto" style={{ backgroundImage: ` url(${require('./OdemeSecenekleriImg/credit-card-bankkart.webp').default})` }}></div>
                        <div className="odemeYazi">
                            <span>4 TAKSİT</span>
                        </div>
                    </div>
                    <div className="odemeBorder"></div>
                    <div id="" className="odemeAlan">
                        <div className="odemeFoto" style={{ backgroundImage: ` url(${require('./OdemeSecenekleriImg/credit-card-maximum.webp').default})` }}></div>
                        <div className="odemeYazi">
                            <span>4 TAKSİT</span>
                        </div>
                    </div>
                    <div className="odemeBorder"></div>
                    <div id="" className="odemeAlan">
                        <div className="odemeFoto" style={{ backgroundImage: ` url(${require('./OdemeSecenekleriImg/credit-card-cardfinans.webp').default})` }}></div>
                        <div className="odemeYazi">
                            <span>3 TAKSİT</span>
                        </div>
                    </div>
                    <div className="odemeBorder"></div>
                    <div id="" className="odemeAlan">
                        <div className="odemeFoto" style={{ backgroundImage: ` url(${require('./OdemeSecenekleriImg/credit-card-advantage.webp').default})` }}></div>
                        <div className="odemeYazi">
                            <span>3 TAKSİT</span>
                        </div>
                    </div>
                    <div className="odemeBorder"></div>
                    <div id="" className="odemeAlan">
                        <div className="odemeFoto" style={{ backgroundImage: ` url(${require('./OdemeSecenekleriImg/credit-card-bonus.webp').default})` }}></div>
                        <div className="odemeYazi">
                            <span>3 TAKSİT</span>
                        </div>
                    </div>
                    <div className="odemeBorder"></div>
                    <div id="" className="odemeAlan">
                        <div className="odemeFoto" style={{ backgroundImage: ` url(${require('./OdemeSecenekleriImg/mastercard-visa-logo.png').default})` }}></div>
                        <div className="odemeYazi">
                            <span></span>
                        </div>
                    </div>
                    <div className="odemeBorder"></div>
                </div>
            </div>
        </div>
        )
}

export default OdemeSecenekleri