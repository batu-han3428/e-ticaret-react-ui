import * as React from 'react';
import {connect} from 'react-redux'

const Urunler = (props) => {
    console.log(props);
    return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card-group mt-5 urunKartgrubu">
                        <div className="card urunKartlari">
                            <div className="kartlarFotoAlan">
                                <a href="Telefon_Icerik/XiomiRedmi.html">
                                    <img className="card-img-top kartlarFoto" src={require('./UrunlerImg/34867488.png').default} alt="xiomiNote8"/>
                                </a>
                            </div>
                            <div className="card-body kartlarBody">
                                <div className="kartlarMarkaAlan">
                                <img className="kartlarMarka" src={require('./UrunlerImg/marka/8885287551026.png').default} alt="xiomilogo" />
                                </div>
                                <div className="kartlarUrunAdAlan">
                                    <span className="kartlarUrunAd"><a href="/#">Xiaomi Redmi Note 8 4GB/64GB Mavi Akıllı Telefon</a></span>
                                </div>
                                <div className="kartlarTopveFiyatlar">
                                    <div style={{display:"none"}} className="kartlarTop">
                                        <span className="card-text kartTopYazi">%9</span>
                                    </div>
                                    <div className="kartlarFiyatlar">
                                        <span className="card-text">2.999 TL</span>
                                        <span style={{display:"none"}} className="card-text indirim">3.099 TL</span>
                                        <span style={{display:"none"}} className="card-text indirimliFiyat">2.999 TL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card urunKartlari">
                            <div className="kartlarFotoAlan">
                                <a href="/#">
                                    <img className="card-img-top kartlarFoto" src={require('./UrunlerImg/38592535.png').default} alt="Huaweip40"/>
                                </a>
                            </div>
                            <div className="card-body kartlarBody">
                                <div className="kartlarMarkaAlan">
                                    <img className="kartlarMarka" src={require('./UrunlerImg/marka/8876210815026.png').default} alt="huaweilogo"/>
                                </div>
                                <div className="kartlarUrunAdAlan">
                                    <span className="kartlarUrunAd"><a href="/#">Huawei P40 Lite 128 GB Pembe Akıllı Telefon</a></span>
                                </div>
                                <div className="kartlarTopveFiyatlar">
                                    <div style={{display:"none"}} className="kartlarTop">
                                        <span className="card-text kartTopYazi">%9</span>
                                    </div>
                                    <div className="kartlarFiyatlar">
                                        <span className="card-text">3.599 TL</span>
                                        <span style={{display:"none"}} className="card-text indirim">3.099 TL</span>
                                        <span style={{display:"none"}} className="card-text indirimliFiyat">2.999 TL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card urunKartlari">
                            <div className="kartlarFotoAlan">
                                <a href="/#">
                                    <img className="card-img-top kartlarFoto" src={require('./UrunlerImg/31157116.jpg').default} alt="AppleAirpods"/>
                                </a>
                            </div>
                            <div className="card-body kartlarBody">
                                <div className="kartlarMarkaAlan">
                                    <img className="kartlarMarka" src={require('./UrunlerImg/marka/8798552719410.png').default} alt="AppleAirPods"/>
                                </div>
                                <div className="kartlarUrunAdAlan">
                                    <span className="kartlarUrunAd"><a href="/#">Apple AirPods 2.Nesil ve Şarj Kutusu (MV7N2TU/A)</a></span>
                                </div>
                                <div className="kartlarTopveFiyatlar">
                                    <div style={{display:"none"}} className="kartlarTop">
                                        <span className="card-text kartTopYazi">%9</span>
                                    </div>
                                    <div className="kartlarFiyatlar">
                                        <span className="card-text">1.599 TL</span>
                                        <span style={{display:"none"}} className="card-text indirim">3.099 TL</span>
                                        <span style={{display:"none"}} className="card-text indirimliFiyat">2.999 TL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card urunKartlari">
                            <div className="kartlarFotoAlan">
                                <a href="/#">
                                    <img className="card-img-top kartlarFoto" src={require('./UrunlerImg/47008001.jpg').default} alt="SamsungGalaxyA30"/>
                                </a>
                            </div>
                            <div className="card-body kartlarBody">
                                <div className="kartlarMarkaAlan">
                                    <img className="kartlarMarka" src={require('./UrunlerImg/marka/8798517788722.png').default} alt="Samsunglogo"/>
                                </div>
                                <div className="kartlarUrunAdAlan">
                                    <span className="kartlarUrunAd"><a href="/#">Samsung Galaxy A31 Blue Akıllı Telefon</a></span>
                                </div>
                                <div className="kartlarTopveFiyatlar">
                                    <div style={{display:"none"}} className="kartlarTop">
                                        <span className="card-text kartTopYazi">%9</span>
                                    </div>
                                    <div className="kartlarFiyatlar">
                                        <span style={{display:"none"}} className="card-text">2.999 TL</span>
                                        <span className="card-text indirim">3.099 TL</span>
                                        <span className="card-text indirimliFiyat">2.999 TL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-group urunKartgrubu">
                        <div className="card urunKartlari">
                            <div className="kartlarFotoAlan">
                                <a href="/#">
                                    <img className="card-img-top kartlarFoto" src={require('./UrunlerImg/38592258.png').default} alt="huaweip40lite128gb"/>
                                </a>
                            </div>
                            <div className="card-body kartlarBody">
                                <div className="kartlarMarkaAlan">
                                    <img className="kartlarMarka" src={require('./UrunlerImg/marka/8876210815026.png').default} alt="huaweilogo"/>
                                </div>
                                <div className="kartlarUrunAdAlan">
                                    <span className="kartlarUrunAd"><a href="/#">Huawei P40 Lite 128 GB Siyah Akıllı Telefon</a></span>
                                </div>
                                <div className="kartlarTopveFiyatlar">
                                    <div style={{display:"none"}} className="kartlarTop">
                                        <span className="card-text kartTopYazi">%9</span>
                                    </div>
                                    <div className="kartlarFiyatlar">
                                        <span className="card-text">3.599 TL</span>
                                        <span style={{display:"none"}} className="card-text indirim">3.099 TL</span>
                                        <span style={{display:"none"}} className="card-text indirimliFiyat">2.999 TL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card urunKartlari">
                            <div className="kartlarFotoAlan">
                                <a href="/#">
                                    <img className="card-img-top kartlarFoto" src={require('./UrunlerImg/35317881.jpg').default} alt="XiomiRedmiNote8"/>
                                </a>
                            </div>
                            <div className="card-body kartlarBody">
                                <div className="kartlarMarkaAlan">
                                    <img className="kartlarMarka" src={require('./UrunlerImg/marka/8885287551026.png').default} alt="XiomiLogo"/>
                                </div>
                                <div className="kartlarUrunAdAlan">
                                    <span className="kartlarUrunAd"><a href="/#">Xiaomi Redmi Note 8 4GB/128GB Siyah Akıllı Telefon</a></span>
                                </div>
                                <div className="kartlarTopveFiyatlar">
                                    <div style={{display:"none"}} className="kartlarTop">
                                        <span className="card-text kartTopYazi">%9</span>
                                    </div>
                                    <div className="kartlarFiyatlar">
                                        <span style={{display:" none"}} className="card-text">3.599 TL</span>
                                        <span className="card-text indirim">3.199 TL</span>
                                        <span className="card-text indirimliFiyat">3.099 TL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card urunKartlari">
                            <div className="kartlarFotoAlan">
                                <a href="/#">
                                    <img className="card-img-top kartlarFoto" src={require('./UrunlerImg/34867478.png').default} alt="XiomiRedmiNote8"/>
                                </a>
                            </div>
                            <div className="card-body kartlarBody">
                                <div className="kartlarMarkaAlan">
                                    <img className="kartlarMarka" src={require('./UrunlerImg/marka/8885287551026.png').default} alt="XiomiLogo"/>
                                </div>
                                <div className="kartlarUrunAdAlan">
                                    <span className="kartlarUrunAd"><a href="/#">Xiaomi Redmi Note 8 4GB/64GB Beyaz Akıllı Telefon</a></span>
                                </div>
                                <div className="kartlarTopveFiyatlar">
                                    <div style={{display:"none"}} className="kartlarTop">
                                        <span className="card-text kartTopYazi">%9</span>
                                    </div>
                                    <div className="kartlarFiyatlar">
                                        <span className="card-text">2.999 TL</span>
                                        <span style={{display:"none"}} className="card-text indirim">3.099 TL</span>
                                        <span style={{display:"none"}} className="card-text indirimliFiyat">2.999 TL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card urunKartlari">
                            <div className="kartlarFotoAlan">
                                <a href="/#">
                                    <img className="card-img-top kartlarFoto" src={require('./UrunlerImg/38957997.jpg').default} alt="SamsungGalaxyNote10"/>
                                </a>
                            </div>
                            <div className="card-body kartlarBody">
                                <div className="kartlarMarkaAlan">
                                    <img className="kartlarMarka" src={require('./UrunlerImg/marka/8798517788722.png').default} alt="Samsunglogo"/>
                                </div>
                                <div className="kartlarUrunAdAlan">
                                    <span className="kartlarUrunAd"><a href="/#">Samsung Galaxy Note10 Lite Siyah Akıllı Telefon</a></span>
                                </div>
                                <div className="kartlarTopveFiyatlar">
                                    <div className="kartlarTop">
                                        <span className="card-text kartTopYazi">%9</span>
                                    </div>
                                    <div className="kartlarFiyatlar">
                                        <span style={{display:"none"}} className="card-text">2.999 TL</span>
                                        <span className="card-text indirim">5.499 TL</span>
                                        <span className="card-text indirimliFiyat">4.999 TL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-group urunKartgrubu">
                        <div className="card urunKartlari">
                            <div className="kartlarFotoAlan">
                                <a href="/#">
                                    <img className="card-img-top kartlarFoto" src={require('./UrunlerImg/36158776.png').default} alt="SamsungGalaxyA51"/>
                                </a>
                            </div>
                            <div className="card-body kartlarBody">
                                <div className="kartlarMarkaAlan">
                                    <img className="kartlarMarka" src={require('./UrunlerImg/marka/8798517788722.png').default} alt="SamsungLogo"/>
                                </div>
                                <div className="kartlarUrunAdAlan">
                                    <span className="kartlarUrunAd"><a href="/#">Samsung Galaxy A51 Akıllı Telefon Siyah</a></span>
                                </div>
                                <div className="kartlarTopveFiyatlar">
                                    <div className="kartlarTop">
                                        <span className="card-text kartTopYazi">%6</span>
                                    </div>
                                    <div className="kartlarFiyatlar">
                                        <span style={{display:"none"}} className="card-text">3.599 TL</span>
                                        <span className="card-text indirim">3.499 TL</span>
                                        <span className="card-text indirimliFiyat">3.299 TL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card urunKartlari">
                            <div className="kartlarFotoAlan">
                                <a href="/#">
                                    <img className="card-img-top kartlarFoto" src={require('./UrunlerImg/35344786.jpg').default} alt="HuaweiWatchGt2"/>
                                </a>
                            </div>
                            <div className="card-body kartlarBody">
                                <div className="kartlarMarkaAlan">
                                    <img className="kartlarMarka" src={require('./UrunlerImg/marka/8876210815026.png').default} alt="HuaweiLogo"/>
                                </div>
                                <div className="kartlarUrunAdAlan">
                                    <span className="kartlarUrunAd"><a href="/#">Huawei Watch GT2 Latona-B19S Akıllı Saat Siyah</a></span>
                                </div>
                                <div className="kartlarTopveFiyatlar">
                                    <div style={{display:"none"}} className="kartlarTop">
                                        <span className="card-text kartTopYazi">%9</span>
                                    </div>
                                    <div className="kartlarFiyatlar">
                                        <span className="card-text">1.399 TL</span>
                                        <span style={{display:"none"}} className="card-text indirim">3.199 TL</span>
                                        <span style={{display:"none"}} className="card-text indirimliFiyat">3.099 TL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card urunKartlari">
                            <div className="kartlarFotoAlan">
                                <a href="/#">
                                    <img className="card-img-top kartlarFoto" src={require('./UrunlerImg/38592532.png').default} alt="HuaweiP40Lite"/>
                                </a>
                            </div>
                            <div className="card-body kartlarBody">
                                <div className="kartlarMarkaAlan">
                                    <img className="kartlarMarka" src={require('./UrunlerImg/marka/8876210815026.png').default} alt="HuaweLogo"/>
                                </div>
                                <div className="kartlarUrunAdAlan">
                                    <span className="kartlarUrunAd"><a href="/#">Huawei P40 Lite 128 GB Yeşil Akıllı Telefon</a></span>
                                </div>
                                <div className="kartlarTopveFiyatlar">
                                    <div style={{display:"none"}} className="kartlarTop">
                                        <span className="card-text kartTopYazi">%9</span>
                                    </div>
                                    <div className="kartlarFiyatlar">
                                        <span className="card-text">3.599 TL</span>
                                        <span style={{display:"none"}} className="card-text indirim">3.099 TL</span>
                                        <span style={{display:"none"}} className="card-text indirimliFiyat">2.999 TL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card urunKartlari">
                            <div className="kartlarFotoAlan">
                                <a href="/#">
                                    <img className="card-img-top kartlarFoto" src={require('./UrunlerImg/44167762.png').default} alt="HuaweiPSmart"/>
                                </a>
                            </div>
                            <div className="card-body kartlarBody">
                                <div className="kartlarMarkaAlan">
                                    <img className="kartlarMarka" src={require('./UrunlerImg/marka/8876210815026.png').default} alt="HuaweiLogo"/>
                                </div>
                                <div className="kartlarUrunAdAlan">
                                    <span className="kartlarUrunAd"><a href="/#">Huawei P Smart S 4-128GB Siyah Akıllı Telefon</a></span>
                                </div>
                                <div className="kartlarTopveFiyatlar">
                                    <div className="kartlarTop">
                                        <span className="card-text kartTopYazi">%10</span>
                                    </div>
                                    <div className="kartlarFiyatlar">
                                        <span style={{display:"none"}} className="card-text">2.999 TL</span>
                                        <span className="card-text indirim">2.899 TL</span>
                                        <span className="card-text indirimliFiyat">2.599 TL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-group urunKartgrubu">
                        <div className="card urunKartlari">
                            <div className="kartlarFotoAlan">
                                <a href="/#">
                                    <img className="card-img-top kartlarFoto" src={require('./UrunlerImg/27731024.jpg').default} alt="JblT500bt"/>
                                </a>
                            </div>
                            <div className="card-body kartlarBody">
                                <div className="kartlarMarkaAlan">
                                    <img className="kartlarMarka" src={require('./UrunlerImg/marka/8798516215858.png').default} alt="JblLogo"/>
                                </div>
                                <div className="kartlarUrunAdAlan">
                                    <span className="kartlarUrunAd"><a href="/#">Jbl T500BT Kulak Üstü Mikrofonlu Kablosuz Kulaklık Siyah</a></span>
                                </div>
                                <div className="kartlarTopveFiyatlar">
                                    <div className="kartlarTop">
                                        <span className="card-text kartTopYazi">%21</span>
                                    </div>
                                    <div className="kartlarFiyatlar">
                                        <span style={{display:"none"}} className="card-text">3.599 TL</span>
                                        <span className="card-text indirim">479 TL</span>
                                        <span className="card-text indirimliFiyat">379 TL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card urunKartlari">
                            <div className="kartlarFotoAlan">
                                <a href="/#">
                                    <img className="card-img-top kartlarFoto" src={require('./UrunlerImg/38592518.png').default} alt="HuaweiP40Lite"/>
                                </a>
                            </div>
                            <div className="card-body kartlarBody">
                                <div className="kartlarMarkaAlan">
                                    <img className="kartlarMarka" src={require('./UrunlerImg/marka/8876210815026.png').default} alt="HuaweiLogo"/>
                                </div>
                                <div className="kartlarUrunAdAlan">
                                    <span className="kartlarUrunAd"><a href="/#">Huawei P40 Lite E 64GB Siyah Akıllı Telefon</a></span>
                                </div>
                                <div className="kartlarTopveFiyatlar">
                                    <div style={{display:"none"}} className="kartlarTop">
                                        <span className="card-text kartTopYazi">%9</span>
                                    </div>
                                    <div className="kartlarFiyatlar">
                                        <span className="card-text">2.799 TL</span>
                                        <span style={{display:"none"}} className="card-text indirim">3.199 TL</span>
                                        <span style={{display:"none"}} className="card-text indirimliFiyat">3.099 TL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card urunKartlari">
                            <div className="kartlarFotoAlan">
                                <a href="/#">
                                    <img className="card-img-top kartlarFoto" src={require('./UrunlerImg/36158757.png').default} alt="SamsungGalaxyA51"/>
                                </a>
                            </div>
                            <div className="card-body kartlarBody">
                                <div className="kartlarMarkaAlan">
                                    <img className="kartlarMarka" src={require('./UrunlerImg/marka/8798517788722.png').default} alt="SamsungLogo"/>
                                </div>
                                <div className="kartlarUrunAdAlan">
                                    <span className="kartlarUrunAd"><a href="/#">Samsung Galaxy A51 Akıllı Telefon Pembe</a></span>
                                </div>
                                <div className="kartlarTopveFiyatlar">
                                    <div className="kartlarTop">
                                        <span className="card-text kartTopYazi">%6</span>
                                    </div>
                                    <div className="kartlarFiyatlar">
                                        <span style={{display:"none"}} className="card-text">3.599 TL</span>
                                        <span className="card-text indirim">3.499 TL</span>
                                        <span className="card-text indirimliFiyat">3.299 TL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card urunKartlari">
                            <div className="kartlarFotoAlan">
                                <a href="/#">
                                    <img className="card-img-top kartlarFoto" src={require('./UrunlerImg/34920944.jpg').default} alt="AppleAirPodsPro"/>
                                </a>
                            </div>
                            <div className="card-body kartlarBody">
                                <div className="kartlarMarkaAlan">
                                    <img className="kartlarMarka" src={require('./UrunlerImg/marka/8798552719410.png').default} alt="AppleLogo"/>
                                </div>
                                <div className="kartlarUrunAdAlan">
                                    <span className="kartlarUrunAd"><a href="/#">Apple MWP22TU/A AirPods Pro Kulak İçi Kablosuz Bluetooth Kulaklık</a></span>
                                </div>
                                <div className="kartlarTopveFiyatlar">
                                    <div style={{display:"none"}} className="kartlarTop">
                                        <span className="card-text kartTopYazi">%6</span>
                                    </div>
                                    <div className="kartlarFiyatlar">
                                        <span className="card-text">2.499 TL</span>
                                        <span style={{display:"none"}} className="card-text indirim">3.499 TL</span>
                                        <span style={{display:"none"}} className="card-text indirimliFiyat">3.299 TL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-group urunKartgrubu">
                        <div className="card urunKartlari">
                            <div className="kartlarFotoAlan">
                                <a href="/#">
                                    <img className="card-img-top kartlarFoto" src={require('./UrunlerImg/35317730.png').default} alt="XiomiRedmiNote8"/>
                                </a>
                            </div>
                            <div className="card-body kartlarBody">
                                <div className="kartlarMarkaAlan">
                                    <img className="kartlarMarka" src={require('./UrunlerImg/marka/8885287551026.png').default} alt="XiomiLogo"/>
                                </div>
                                <div className="kartlarUrunAdAlan">
                                    <span className="kartlarUrunAd"><a href="/#">Xiaomi Redmi Note 8 Pro 6GB/128GB Gri Akıllı Telefon</a></span>
                                </div>
                                <div className="kartlarTopveFiyatlar">
                                    <div style={{display:"none"}} className="kartlarTop">
                                        <span className="card-text kartTopYazi">%21</span>
                                    </div>
                                    <div className="kartlarFiyatlar">
                                        <span className="card-text">3.699 TL</span>
                                        <span style={{display:"none"}} className="card-text indirim">479 TL</span>
                                        <span style={{display:"none"}} className="card-text indirimliFiyat">379 TL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card urunKartlari">
                            <div className="kartlarFotoAlan">
                                <a href="/#">
                                    <img className="card-img-top kartlarFoto" src={require('./UrunlerImg/35768115.png').default} alt="XiomiRedmiNote84Gb"/>
                                </a>
                            </div>
                            <div className="card-body kartlarBody">
                                <div className="kartlarMarkaAlan">
                                    <img className="kartlarMarka" src={require('./UrunlerImg/marka/8885287551026.png').default} alt="XiomiLogo"/>
                                </div>
                                <div className="kartlarUrunAdAlan">
                                    <span className="kartlarUrunAd"><a href="/#">Xiaomi Redmi Note 8 4GB/128GB Beyaz Akıllı Telefon</a></span>
                                </div>
                                <div className="kartlarTopveFiyatlar">
                                    <div className="kartlarTop">
                                        <span className="card-text kartTopYazi">%9</span>
                                    </div>
                                    <div className="kartlarFiyatlar">
                                        <span style={{display:"none"}} className="card-text">2.799 TL</span>
                                        <span className="card-text indirim">3.399 TL</span>
                                        <span className="card-text indirimliFiyat">3.099 TL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card urunKartlari">
                            <div className="kartlarFotoAlan">
                                <a href="/#">
                                    <img className="card-img-top kartlarFoto" src={require('./UrunlerImg/26932356.jpg').default} alt="JblT460bt"/>
                                </a>
                            </div>
                            <div className="card-body kartlarBody">
                                <div className="kartlarMarkaAlan">
                                    <img className="kartlarMarka" src={require('./UrunlerImg/marka/8798516215858.png').default} alt="JblLogo"/>
                                </div>
                                <div className="kartlarUrunAdAlan">
                                    <span className="kartlarUrunAd"><a href="/#">Jbl T460BT Kulak Üstü Mikrofonlu Kablosuz Kulaklık Siyah</a></span>
                                </div>
                                <div className="kartlarTopveFiyatlar">
                                    <div style={{display:"none"}} className="kartlarTop">
                                        <span className="card-text kartTopYazi">%6</span>
                                    </div>
                                    <div className="kartlarFiyatlar">
                                        <span className="card-text">327 TL</span>
                                        <span style={{display:"none"}} className="card-text indirim">3.499 TL</span>
                                        <span style={{display:"none"}} className="card-text indirimliFiyat">3.299 TL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card urunKartlari">
                            <div className="kartlarFotoAlan">
                                <a href="/#">
                                    <img className="card-img-top kartlarFoto" src={require('./UrunlerImg/8806189203506_1562149528111.jpg').default} alt="HuaweiY62019"/>
                                </a>
                            </div>
                            <div className="card-body kartlarBody">
                                <div className="kartlarMarkaAlan">
                                    <img className="kartlarMarka" src={require('./UrunlerImg/marka/8876210815026.png').default} alt="HuaweiLogo"/>
                                </div>
                                <div className="kartlarUrunAdAlan">
                                    <span className="kartlarUrunAd"><a href="/#">Huawei Y6 2019 Amber Brown Akıllı Telefon</a></span>
                                </div>
                                <div className="kartlarTopveFiyatlar">
                                    <div style={{display:"none"}} className="kartlarTop">
                                        <span className="card-text kartTopYazi">%6</span>
                                    </div>
                                    <div className="kartlarFiyatlar">
                                        <span className="card-text">1.849 TL</span>
                                        <span style={{display:"none"}} className="card-text indirim">3.499 TL</span>
                                        <span style={{display:"none"}} className="card-text indirimliFiyat">3.299 TL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

const mapStateToProps = (...state) =>{
    return {
        products:state.urunler
    }
}
export default connect(mapStateToProps)(Urunler)
