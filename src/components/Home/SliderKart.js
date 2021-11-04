import * as React from 'react';
import * as Icon from 'react-bootstrap-icons';

const SliderKart = () => {
    return (
        <div className="row">
            <div className="col-md-12 mt-4">

                {/* Slider */}
                <div id="KontrolTusuTetikle2" className="carousel slide gununFirsatlariSlider" data-bs-ride="carousel"
                     data-bs-interval="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">

                             {/*Cards*/} 
                            <div className="card-group" id="kartlar">
                                <div className="card" id="kart1">
                                    <a href="/#" className="btn text-start p-0">
                                        <div className="card-header" style={{ backgroundImage: ` url(${require('./SliderKartImg/48345076.jpg').default})` }}>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text baslik">
                                                Apple MacBook Air 13" M1 8C CPU 256GB Space
                                                Grey MGN63TU/A
                                            </p>
                                            <span className="card-text badge rounded-pill ikon">
                                                3.0<Icon.StarFill />
                                            </span>
                                            <span className="card-text badge ps-0 mt-2 indirimlifiyat">
                                                9.599.00
                                                TL
                                            </span>
                                            <span className="card-text badge ps-0 asilfiyat">10.999.00 TL</span>
                                            <span className="card-text badge fiyatfark">1400 TL İndirim</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="card" id="kart2">
                                    <a href="/#" className="btn text-start p-0">
                                        <div className="card-header" style={{ backgroundImage: ` url(${require('./SliderKartImg/52999229.png').default})` }}>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text baslik">Samsung Galaxy A52 Akıllı Telefon Beyaz</p>
                                            <span className="card-text badge ps-0 indirimlifiyat">3.899.00 TL</span>
                                            <span className="card-text badge ps-0 asilfiyat">3.999.00 TL</span>
                                            <span className="card-text badge fiyatfark">100 TL İndirim</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="card" id="kart3">
                                    <a href="/#" className="btn text-start p-0">
                                        <div className="card-header" style={{ backgroundImage: ` url(${require('./SliderKartImg/52990132.png').default})` }}>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text baslik">
                                                Samsung Galaxy A32 Light Violet Akıllı
                                                Telefon Light Violet
                                            </p>
                                            <span className="card-text badge ps-0 indirimlifiyat">3.599.00 TL</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="card" id="kart4">
                                    <a href="/#" className="btn text-start p-0">
                                        <div className="card-header" style={{ backgroundImage: ` url(${require('./SliderKartImg/46607432.jpg').default})` }}>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text baslik">
                                                Philips 55PUS7805/62 55" 139 Ekran
                                                Ambilightlı 4K UHD Smart TV
                                            </p>
                                            <span className="card-text badge rounded-pill ikon">
                                                5.0<Icon.StarFill />
                                            </span>
                                            <span className="card-text badge ps-0 mt-2 indirimlifiyat">
                                                9.599.00
                                                TL
                                            </span>
                                            <span className="card-text badge ps-0 asilfiyat">10.999.00 TL</span>
                                            <span className="card-text badge fiyatfark">1400 TL İndirim</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                             {/*/Cards*/}

                        </div>
                        <div className="carousel-item">

                             {/*Cards*/} 
                            <div className="card-group" id="kartlar">
                                <div className="card" id="kart5">
                                    <a href="/#" className="btn text-start p-0">
                                        <div className="card-header" style={{ backgroundImage: ` url(${require('./SliderKartImg/yeni1.jpg').default})` }}>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text baslik">
                                                Philips XB9155/07 Marathon Ultimate Toz
                                                Torbasız Süpürge
                                            </p>
                                            <span className="card-text badge rounded-pill ikon">
                                                3.0<Icon.StarFill />
                                            </span>
                                            <span className="card-text badge ps-0 mt-2 indirimlifiyat">
                                                3.499.00
                                                TL
                                            </span>
                                            <span className="card-text badge ps-0 asilfiyat">3.899.00 TL</span>
                                            <span className="card-text badge fiyatfark">400 TL İndirim</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="card" id="kart6">
                                    <a href="/#" className="btn text-start p-0">
                                        <div className="card-header" style={{ backgroundImage: ` url(${require('./SliderKartImg/yeni2.png').default})` }}>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text baslik">
                                                TCL 55C715 55" 139 Ekran 4K UHD Android
                                                Smart QLED TV
                                            </p>
                                            <span className="card-text badge ps-0 indirimlifiyat">5.999.00 TL</span>
                                            <span className="card-text badge ps-0 asilfiyat">6.999.00 TL</span>
                                            <span className="card-text badge fiyatfark">1000 TL İndirim</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="card" id="kart7">
                                    <a href="/#" className="btn text-start p-0">
                                        <div className="card-header" style={{ backgroundImage: ` url(${require('./SliderKartImg/yeni3.jpg').default})` }}>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text baslik">
                                                LG 65UN73006 65" 165 Ekran 4K UHD Smart TV
                                            </p>
                                            <span className="card-text badge ps-0 indirimlifiyat">7.499.00 TL</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="card" id="kart8">
                                    <a href="/#" className="btn text-start p-0">
                                        <div className="card-header" style={{ backgroundImage: ` url(${require('./SliderKartImg/yeni4.jpg').default})` }}>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text baslik">
                                                Samsung WW90J5475FW/AH A+++ Enerji Sınıfı 9
                                                Kg 1400 Devir Çamaşır Makinesi
                                            </p>
                                            <span className="card-text badge rounded-pill ikon">
                                                5.0<Icon.StarFill />
                                            </span>
                                            <span className="card-text badge ps-0 mt-2 indirimlifiyat">
                                                3.399.00
                                                TL
                                            </span>
                                            <span className="card-text badge ps-0 asilfiyat">4.299.00 TL</span>
                                            <span className="card-text badge fiyatfark">900 TL İndirim</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/*/Cards */}

                        </div>
                    </div>
                    <button id="geri" className="carousel-control-prev" data-bs-target="#KontrolTusuTetikle2"
                            data-bs-slide="prev">
                        <span><Icon.ArrowLeftCircleFill /></span>
                        <span className="visually-hidden">Geri</span>
                    </button>
                    <button id="ileri" className="carousel-control-next" data-bs-target="#KontrolTusuTetikle2"
                            data-bs-slide="next">
                        <span><Icon.ArrowRightCircleFill /></span>
                        <span className="visually-hidden">İleri</span>
                    </button>
                </div>
                {/*/Slider */}

                {/*Mobil İçin Kart*/}
                <div className="card-group d-none gizliKart" id="kartlar">
                    <div className="card" id="kart1">
                        <a href="/#" className="btn text-start p-0">
                            <img className="card-img-top img-fluid" src={require('./SliderKartImg/48345076.jpg').default} alt="" />
                            <div className="card-body">
                                <p className="card-text baslik">
                                    Apple MacBook Air 13" M1 8C CPU 256GB Space Grey
                                    MGN63TU/A
                                </p>
                                <span className="card-text badge rounded-pill ikon">
                                    3.0 <Icon.StarFill viewBox="1 1 17 17" />
                                </span>
                                <span className="card-text badge ps-0 mt-2 indirimlifiyat"> 9.599.00 TL</span>
                                <span className="card-text badge ps-0 asilfiyat">10.999.00 TL</span>
                                <span className="card-text badge fiyatfark">1400 TL İndirim</span>
                            </div>
                        </a>
                    </div>
                    <div className="card" id="kart2">
                        <a href="/#" className="btn text-start p-0">
                            <img className="card-img-top" src={require('./SliderKartImg/52999229.png').default} alt="" />
                            <div className="card-body">
                                <p className="card-text baslik">Samsung Galaxy A52 Akıllı Telefon Beyaz</p>
                                <span className="card-text badge ps-0 indirimlifiyat">3.899.00 TL</span>
                                <span className="card-text badge ps-0 asilfiyat">3.999.00 TL</span>
                                <span className="card-text badge fiyatfark">100 TL İndirim</span>
                            </div>
                        </a>
                    </div>
                    <div className="card" id="kart3">
                        <a href="/#" className="btn text-start p-0">
                            <img className="card-img-top" src={require('./SliderKartImg/52990132.png').default} alt="" />
                            <div className="card-body">
                                <p className="card-text baslik">
                                    Samsung Galaxy A32 Light Violet Akıllı Telefon Light
                                    Violet
                                </p>
                                <span className="card-text badge ps-0 indirimlifiyat">3.599.00 TL</span>
                            </div>
                        </a>
                    </div>
                    <div className="card" id="kart4">
                        <a href="/#" className="btn text-start p-0">
                            <img className="card-img-top" src={require('./SliderKartImg/46607432.jpg').default} alt="" />
                            <div className="card-body mt-5">
                                <p className="card-text baslik">
                                    Philips 55PUS7805/62 55" 139 Ekran Ambilightlı 4K UHD
                                    Smart TV
                                </p>
                                <span className="card-text badge rounded-pill ikon">
                                    5.0<Icon.StarFill viewBox="1 1 17 17" />
                                </span>
                                <span className="card-text badge ps-0 mt-2 indirimlifiyat">9.599.00 TL</span>
                                <span className="card-text badge ps-0 asilfiyat">10.999.00 TL</span>
                                <span className="card-text badge fiyatfark">1400 TL İndirim</span>
                            </div>
                        </a>
                    </div>
                    <div className="card" id="kart5">
                        <a href="/#" className="btn text-start p-0">
                            <img className="card-img-top img-fluid" src={require('./SliderKartImg/yeni1.jpg').default} alt="" />
                            <div className="card-body">
                                <p className="card-text baslik">
                                    Philips XB9155/07 Marathon Ultimate Toz Torbasız Süpürge
                                </p>
                                <span className="card-text badge rounded-pill ikon">
                                    3.0<Icon.StarFill viewBox="1 1 17 17" />
                                </span>
                                <span className="card-text badge ps-0 mt-2 indirimlifiyat">3.499.00 TL</span>
                                <span className="card-text badge ps-0 asilfiyat">3.899.00 TL</span>
                                <span className="card-text badge fiyatfark">400 TL İndirim</span>
                            </div>
                        </a>
                    </div>
                    <div className="card" id="kart6">
                        <a href="/#" className="btn text-start p-0">
                            <img className="card-img-top" src={require('./SliderKartImg/yeni2.png').default} alt="" />
                            <div className="card-body">
                                <p className="card-text baslik">
                                    TCL 55C715 55" 139 Ekran 4K UHD Android Smart QLED TV
                                </p>
                                <span className="card-text badge ps-0 indirimlifiyat">5.999.00 TL</span>
                                <span className="card-text badge ps-0 asilfiyat">6.999.00 TL</span>
                                <span className="card-text badge fiyatfark">1000 TL İndirim</span>
                            </div>
                        </a>
                    </div>
                    <div className="card" id="kart7">
                        <a href="/#" className="btn text-start p-0">
                            <img className="card-img-top" src={require('./SliderKartImg/yeni3.jpg').default} alt="" />
                            <div className="card-body">
                                <p className="card-text baslik">LG 65UN73006 65" 165 Ekran 4K UHD Smart TV</p>
                                <span className="card-text badge ps-0 indirimlifiyat">7.499.00 TL</span>
                            </div>
                        </a>
                    </div>
                    <div className="card" id="kart8">
                        <a href="/#" className="btn text-start p-0">
                            <img className="card-img-top" src={require('./SliderKartImg/yeni4.jpg').default} alt="" />
                            <div className="card-body mt-5">
                                <p className="card-text baslik">
                                    Samsung WW90J5475FW/AH A+++ Enerji Sınıfı 9 Kg 1400
                                    Devir Çamaşır Makinesi
                                </p>
                                <span className="card-text badge rounded-pill ikon">
                                    5.0<Icon.StarFill viewBox="1 1 17 17" />
                                </span>
                                <span className="card-text badge ps-0 mt-2 indirimlifiyat">3.399.00 TL</span>
                                <span className="card-text badge ps-0 asilfiyat">4.299.00 TL</span>
                                <span className="card-text badge fiyatfark">900 TL İndirim</span>
                            </div>
                        </a>
                    </div>
                </div>
                {/*/Mobil İçin Kart */}
            </div>
        </div>
    )
}

export default SliderKart;