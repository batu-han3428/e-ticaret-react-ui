import * as React from 'react';
import * as Icon from 'react-bootstrap-icons';
import './UrunKategoriKurumsal.css';

const UrunKategoriKurumsal = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-4" id="urun_kategoriSutun">
                    <div className="liste">
                        <h5>Popüler Ürünler</h5>
                        <div></div>
                        <div> <a href="/#">iPhone 12</a></div>
                        <div> <a href="/#">iPhone 12 Pro</a></div>
                        <div> <a href="/#">iPhone 11</a></div>
                        <div> <a href="/#">iPhone 11 Pro Max</a></div>
                        <div> <a href="/#">iPhone XR</a></div>
                        <div> <a href="/#">iPhone SE</a></div>
                        <div> <a href="/#">Apple Watch Series 6</a></div>
                        <div> <a href="/#">Airpods 2</a></div>
                        <div> <a href="/#">Samsung Galaxy A71</a></div>
                        <div> <a href="/#">Samsung Galaxy Note 10 Lite</a></div>
                        <div> <a href="/#">Samsung Galaxy Note 20 Ultra</a></div>
                        <div> <a href="/#">Huawei P40 Lite</a></div>
                        <div> <a href="/#">Huawei P Smart Pro</a></div>
                        <div> <a href="/#">Huawei P Smart S</a></div>
                        <div> <a href="/#">Xiaomi Redmi Note 9 Pro</a></div>
                        <div> <a href="/#">Oppo Reno 3</a></div>
                        <div> <a href="/#">Oppo Reno 2Z</a></div>
                        <div> <a href="/#">Oppo Reno 4</a></div>
                    </div>
                    <div className="liste">
                        <h5>Kategoriler</h5>
                        <div></div>
                        <div> <a href="/#">PS5</a></div>
                        <div> <a href="/#">XBox Series X</a></div>
                        <div> <a href="/#">XBox Series S</a></div>
                        <div> <a href="/#">Akıllı Telefon</a></div>
                        <div> <a href="/#">iPhone</a></div>
                        <div> <a href="/#">Android Telefon</a></div>
                        <div> <a href="/#">Televizyon</a></div>
                        <div> <a href="/#">Notebook</a></div>
                        <div> <a href="/#">Oyun Bilgisayarı / Gaming Notebook</a></div>
                        <div> <a href="/#">Tablet</a></div>
                        <div> <a href="/#">PS4</a></div>
                        <div> <a href="/#">LED TV</a></div>
                        <div> <a href="/#">Süpürge</a></div>
                        <div> <a href="/#">Akıllı Saat</a></div>
                        <div> <a href="/#">Apple Watch</a></div>
                        <div> <a href="/#">Akıllı Bileklik</a></div>
                        <div> <a href="/#">Kulaklık</a></div>
                        <div> <a href="/#">Kablosuz Kulaklık</a></div>
                        <div> <a href="/#">Kahve Makinası</a></div>
                        <div> <a href="/#">Çamaşır Makinası</a></div>
                        <div> <a href="/#">Klima</a></div>
                        <div> <a href="/#">Buzdolabı</a></div>
                        <div> <a href="/#">Vantilatör</a></div>
                    </div>
                    <div className="liste">
                        <h5>Özel Sayfalar</h5>
                        <div></div>
                        <div> <a href="/#">Playstation 5</a></div>
                        <div> <a href="/#">Oyuncu Mouse ve Mouse Pad</a></div>
                        <div> <a href="/#">Asus Laptop</a></div>
                        <div> <a href="/#">Monster Notebook</a></div>
                        <div> <a href="/#">Xiaomi Cep Telefonu</a></div>
                        <div> <a href="/#">Samsung Cep Telefonu</a></div>
                        <div> <a href="/#">Huawei Cep Telefonu</a></div>
                        <div> <a href="/#">Oppo Cep Telefonu</a></div>
                        <div> <a href="/#">Macbook</a></div>
                        <div> <a href="/#">Apple Watch 6</a></div>
                        <div> <a href="/#">Çeyiz Seti</a></div>
                        <div> <a href="/#">Robot Süpürge</a></div>
                        <div> <a href="/#">Tıraş Makinesi</a></div>
                        <div> <a href="/#">Monitör</a></div>
                        <div> <a href="/#">Epilasyon Aleti</a></div>
                        <div> <a href="/#">Harici Harddisk</a></div>
                        <div> <a href="/#">Bluetooth Hoparlör</a></div>
                        <div> <a href="/#">Teknosa İndirim</a></div>
                        <div> <a href="/#">Çay Makinesi</a></div>
                    </div>
                    <div className="liste">
                        <h5>Kurumsal</h5>
                        <div></div>
                        <div> <a href="/#">Investor Relations</a></div>
                        <div> <a href="/#">İnsan Kaynakları</a></div>
                        <div> <a href="/#">İşlem Rehberi</a></div>
                        <div> <a href="/#">İletişim</a></div>
                        <div> <a href="/#">Gizlilik Sözleşmesi</a></div>
                        <div> <a href="/#">Yatırımcı İlişkileri</a></div>
                        <div> <a href="/#">Kurumsal Satış</a></div>
                        <div> <a href="/#">Mağazalarımız</a></div>
                        <div> <a href="/#">Bilgi Toplumu Hizmetleri</a></div>
                        <div> <a href="/#">Kişisel Verilerin Korunması</a></div>
                    </div>
                    <div className="liste">
                        <h5>Mobil Uygulamalar</h5>
                        <div></div>
                        <div>
                            <a href="/#">                             
                                <img src={require('./UrunKategoriKurumsalImg/android.svg').default}
                                    width="130" alt=""/>
                            </a>
                        </div>
                        <div>
                            <a href="/#">                             
                                <img src={require('./UrunKategoriKurumsalImg/ios.svg').default}
                                    width="130" alt=""/>
                            </a>
                        </div>
                        <div>
                            <a href="/#">
                                <img src={require('./UrunKategoriKurumsalImg/appgallery.svg').default} width="130" alt=""/>
                            </a>
                        </div>
                        <div></div>
                        <div className="liste">
                            <h5>Bizi Takip Edin</h5>
                            <div></div>
                            <div>
                                <a href="/#">
                                    <Icon.Facebook style={{ fontSize: "20px" }} />
                                     Facebook                           
                                </a>
                            </div>
                            <div>
                                <a href="/#">
                                    <Icon.Twitter style={{ fontSize: "20px" }} />
                                    Twitter
                                </a>
                            </div>
                            <div>
                                <a href="/#">
                                    <Icon.Linkedin style={{ fontSize: "20px" }} />
                                    Linkedin
                                </a>
                            </div>
                            <div>
                                <a href="/#">
                                    <Icon.Youtube style={{ fontSize: "20px" }} />
                                    Youtube
                                </a>
                            </div>
                            <div>
                                <a href="/#">
                                    <Icon.Instagram style={{ fontSize: "20px" }} />
                                    İnstagram
                                </a>
                            </div>
                            <div>
                                <a href="/#">
                                    <img src={require('./UrunKategoriKurumsalImg/euronics-logo-large.png').default}
                                        width="130" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        )
}

export default UrunKategoriKurumsal