import * as React from 'react';
import './AlisverisKredisiSecenekleri.css';

const AlisverisKredisiSecenekleri = () => {
    return (
        <div className="container border-bottom" id="alisverisKrediContainer">
            <div className="row">
                <div className="col-md-12">
                    <span id="alisverisKrediBaslik">Alışveriş Kredisi Seçenekleri</span>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-8" id="alisverisKredisiAlanSutun">
                    <div id="" className="alisverisAlan">
                        <div className="alisverisFoto" style={{ backgroundImage: ` url(${require('./AlisverisKredisiSecenekleriImg/ing_logo.webp').default})` }} id=""></div>
                        <div className="alisverisYazi">
                            <span>MAĞAZA VE ONLINE ALIŞVERİŞ KREDİSİ</span>
                        </div>
                    </div>
                    <div className="alisverisBorder"></div>
                    <div id="" className="alisverisAlan">
                        <div className="alisverisFoto" style={{ backgroundImage: ` url(${require('./AlisverisKredisiSecenekleriImg/akbank_logo.webp').default})` }} id=""></div>
                        <div className="alisverisYazi">
                            <span>MAĞAZA VE ONLINE ALIŞVERİŞ KREDİSİ</span>
                        </div>
                    </div>
                    <div className="alisverisBorder"></div>
                    <div id="" className="alisverisAlan">
                        <div className="alisverisFoto" style={{ backgroundImage: ` url(${require('./AlisverisKredisiSecenekleriImg/ykb_logo.webp').default})` }} id=""></div>
                        <div className="alisverisYazi">
                            <span>MAĞAZA VE ONLINE ALIŞVERİŞ KREDİSİ</span>
                        </div>
                    </div>
                    <div className="alisverisBorder"></div>
                </div>
            </div>
        </div>
        )
}

export default AlisverisKredisiSecenekleri