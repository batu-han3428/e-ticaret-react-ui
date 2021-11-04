import * as React from 'react';

const Marka = () => {
    return (
        <div className="row">
            <div className="col-md-12" id="marcaSutun">
                <div className="urunlerDivAlan" >
                    <div className="urunlerDivFoto">
                        <img className="urunlerFoto" src={require('./MarkaImg/logo_apple_19.webp').default} alt="apple" />
                    </div>
                    <div>
                        <span>Apple</span>
                    </div>
                </div>
                <div className="urunlerDivAlan" >
                    <div className="urunlerDivFoto">
                        <img className="urunlerFoto" src={require('./MarkaImg/logo_samsung_19.webp').default} alt="Samsung" />
                    </div>
                    <div>
                        <span>Samsung</span>
                    </div>
                </div>
                <div className="urunlerDivAlan" >
                    <div className="urunlerDivFoto">
                        <img className="urunlerFoto" src={require('./MarkaImg/category_logo_casper.webp').default} alt="Casper" />
                    </div>
                    <div>
                        <span>Casper</span>
                    </div>
                </div>
                <div className="urunlerDivAlan" >
                    <div className="urunlerDivFoto">
                        <img className="urunlerFoto" src={require('./MarkaImg/category_logo_huawei_201228.webp').default} alt="Huawei" />
                    </div>
                    <div>
                        <span>Huawei</span>
                    </div>
                </div>
                <div className="urunlerDivAlan" >
                    <div className="urunlerDivFoto">
                        <img className="urunlerFoto" src={require('./MarkaImg/logo_xiaomi_19.webp').default} alt="Xiomi" />
                    </div>
                    <div>
                        <span>Xiomi</span>
                    </div>
                </div>
                <div className="urunlerDivAlan" >
                    <div className="urunlerDivFoto">
                        <img className="urunlerFoto" src={require('./MarkaImg/logo_realme_19.png').default} alt="Realme" />
                    </div>
                    <div>
                        <span>Realme</span>
                    </div>
                </div>
                <div className="urunlerDivAlan" >
                    <div className="urunlerDivFoto">
                        <img className="urunlerFoto" src={require('./MarkaImg/oppo.svg').default} alt="Oppo" />
                    </div>
                    <div>
                        <span>Oppo</span>
                    </div>
                </div>

            </div>
        </div>
        )
}

export default Marka;