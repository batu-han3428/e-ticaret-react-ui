import * as React from 'react';
import * as Icon from 'react-bootstrap-icons';

const Filtreleme = () => {
    return (
        
        <div className="container mb-4" id="filtre">
            <div className="row">
                <div className="col-6">
                    <div className="filtreDiv">
                        <button className="filtreButon" data-bs-target="#modalFiltre" data-bs-toggle="modal">
                            <span className="filtreYazi">Filtrele</span>
                            <Icon.FunnelFill className="filtreIcon" />
                        </button>
                        <div className="modal fade" id="modalFiltre">
                            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header d-flex">
                                        <h4 className="modal-title ms-auto">Telefon Fiyatları ve Modelleri</h4>
                                        <button className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="accordion" style={{ backgroundColor: "white" }}>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#kategoriler">
                                                        <Icon.TagsFill className="categoriesIcon" /><span>KATEGORİLER</span>
                                                    </button>
                                                </h2>
                                                <div id="kategoriler" className="accordion-collapse collapse">                           
                                                    <div className="accordion-body">
                                                        <a href="/#">Cep Telefonu Aksesuarları&nbsp;<span>(1.399)</span></a>
                                                        <a href="/#">Kılıf ve Koruyucular&nbsp;<span>(845)</span></a>
                                                        <a href="/#">Kulaklıklar&nbsp;<span>(533)</span></a>
                                                        <a href="/#">Kılıf ve Koruyucular&nbsp;<span>(845)</span></a>
                                                        <a href="/#">Kılıflar&nbsp;<span>(473)</span></a>
                                                        <a href="/#">Ekran Koruyucular&nbsp;<span>(360)</span></a>
                                                        <a href="/#">Şarj Cihazları&nbsp;<span>(336)</span></a>
                                                        <a href="/#">Şarj Kabloları&nbsp;<span>(248)</span></a>
                                                        <a href="/#">Cep Telefonu&nbsp;<span>(213)</span></a>
                                                        <a href="/#">Bluetooth Kulaklıklar&nbsp;<span>(202)</span></a>
                                                        <a href="/#">Kulak İçi Kulaklık&nbsp;<span>(192)</span></a>
                                                        <a href="/#">Discount Category&nbsp;<span>(183)</span></a>
                                                        <a href="/#">Orange Category&nbsp;<span>(183)</span></a>
                                                        <a href="/#">Android Telefonlar&nbsp;<span>(149)</span></a>
                                                        <a href="/#">Kulak Üstü Kulaklık&nbsp;<span>(149)</span></a>
                                                        <a href="/#">Giyilebilir Teknoloji&nbsp;<span>(139)</span></a>
                                                        <a href="/#">Taşınabilir Şarj Cihazları&nbsp;<span>(113)</span></a>
                                                        <a href="/#">Araç Kitleri&nbsp;<span>(93)</span></a>
                                                        <a href="/#">Akıllı Saatler&nbsp;<span>(74)</span></a>
                                                        <a href="/#">iPhone iOS Telefonlar&nbsp;<span>(64)</span></a>
                                                        <a href="/#">Giyilebilir Teknoloji Aksesuarları&nbsp;<span>(32)</span></a>
                                                        <a href="/#">Akıllı Bileklik&nbsp;<span>(25)</span></a>
                                                        <a href="/#">Telsiz ve Masaüstü Telefonlar&nbsp;<span>(17)</span></a>
                                                        <a href="/#">Masaüstü Telefonlar&nbsp;<span>(17)</span></a>
                                                        <a href="/#">Dr. Teknolog&nbsp;<span>(16)</span></a>
                                                        <a href="/#">Ekran Koruma Hizmeti&nbsp;<span>(16)</span></a>
                                                        <a href="/#">iPhone 12 Pro&nbsp;<span>(12)</span></a>
                                                        <a href="/#">Nbo Akıllı Telefon&nbsp;<span>(9)</span></a>
                                                        <a href="/#">iPhone SE&nbsp;<span>(8)</span></a>
                                                        <a href="/#">iPhone 12 Pro Max&nbsp;<span>(8)</span></a>
                                                        <a href="/#">iPhone 12 Mini&nbsp;<span>(8)</span></a>
                                                        <a href="/#">Adaptörler&nbsp;<span>(8)</span></a>
                                                        <a href="/#">Selfie Çubuğu&nbsp;<span>(6)</span></a>
                                                        <a href="/#">iPhone XR&nbsp;<span>(3)</span></a>
                                                        <a href="/#">Sanal Gerçeklik Gözlüğü&nbsp;<span>(3)</span></a>
                                                        <a href="/#">Bilgisayar&nbsp;<span>(3)</span></a>
                                                        <a href="/#">Bilgisayar Aksesuarları&nbsp;<span>(2)</span></a>
                                                        <a href="/#">Kulaklıklar&nbsp;<span>(1)</span></a>
                                                        <a href="/#">Bluetooth Kulaklıklar&nbsp;<span>(1)</span></a>
                                                        <a href="/#">Oppo Reno 5 Lite&nbsp;<span>(1)</span></a>                       
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#markalar">
                                                        <Icon.StarFill className="categoriesIcon" /><span>MARKALAR</span>
                                                    </button>
                                                </h2>
                                                <div id="markalar" className="accordion-collapse collapse">
                                                    <div className="accordion-body">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="preoCheck"/>
                                                            <label className="form-check-label" htmlFor ="preoCheck">
                                                                PREO&nbsp;<span>(647)</span>
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="appleCheck"/>
                                                            <label className="form-check-label" htmlFor ="appleCheck">
                                                                APPLE&nbsp;<span>(202)</span>
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="samsungCheck"/>
                                                            <label className="form-check-label" htmlFor ="samsungCheck">
                                                                SAMSUNG&nbsp;<span>(181)</span>
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="ttecCheck"/>
                                                            <label className="form-check-label" htmlFor ="ttecCheck">
                                                                TTEC&nbsp;<span>(129)</span>
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="jblCheck"/>
                                                            <label className="form-check-label" htmlFor ="jblCheck">
                                                                JBL&nbsp;<span>(106)</span>
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="cellularlineCheck"/>
                                                            <label className="form-check-label" htmlFor ="cellularlineCheck">
                                                                CELLULAR&nbsp;LINE&nbsp;<span>(95)</span>
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="huaweiCheck"/>
                                                            <label className="form-check-label" htmlFor ="huaweiCheck">
                                                                HUAWEI&nbsp;<span>(77)</span>
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="cellyCheck"/>
                                                            <label className="form-check-label" htmlFor ="cellyCheck">
                                                                CELLY&nbsp;<span>(64)</span>
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="ankerCheck"/>
                                                            <label className="form-check-label" htmlFor ="ankerCheck">
                                                                ANKER&nbsp;<span>(58)</span>
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="sonyCheck"/>
                                                            <label className="form-check-label" htmlFor ="sonyCheck">
                                                                SONY&nbsp;<span>(55)</span>
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="swissCheck"/>
                                                            <label className="form-check-label" htmlFor ="swissCheck">
                                                                SWISS&nbsp;<span>(41)</span>
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="xiaomiCheck"/>
                                                            <label className="form-check-label" htmlFor ="xiaomiCheck">
                                                                XIAOMI&nbsp;<span>(36)</span>
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="philipsCheck"/>
                                                            <label className="form-check-label" htmlFor ="philipsCheck">
                                                                PHILIPS&nbsp;<span>(32)</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#fiyat">
                                                        <Icon.CurrencyDollar className="categoriesIcon" /><span>FİYAT</span>
                                                </button>
                                            </h2>
                                            <div id="fiyat" className="accordion-collapse collapse">
                                                <div className="accordion-body">                              
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="500Check"/>
                                                        <label className="form-check-label" htmlFor ="500Check">
                                                            500-1.000&nbsp;TL&nbsp;Arası&nbsp;<span>(137)</span>
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="1000Check"/>
                                                        <label className="form-check-label" htmlFor ="1000Check">
                                                            1.000-2.500&nbsp;TL&nbsp;Arası&nbsp;<span>(140)</span>
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="2500Check"/>
                                                        <label className="form-check-label" htmlFor ="2500Check">
                                                            2.500-4.000&nbsp;TL&nbsp;Arası&nbsp;<span>(76)</span>
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="4000Check"/>
                                                        <label className="form-check-label" htmlFor ="4000Check">
                                                            4.000-5.500&nbsp;TL&nbsp;Arası&nbsp;<span>(42)</span>
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="5500Check"/>
                                                        <label className="form-check-label" htmlFor ="5500Check">
                                                            5.500-7.500&nbsp;TL&nbsp;Arası&nbsp;<span>(11)</span>
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="250Check"/>
                                                        <label className="form-check-label" htmlFor ="250Check">
                                                            250-500&nbsp;TL&nbsp;Arası&nbsp;<span>(301)</span>
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="100Check"/>
                                                        <label className="form-check-label" htmlFor ="100Check">
                                                            100-250&nbsp;TL&nbsp;Arası&nbsp;<span>(405)</span>
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="7500Check"/>
                                                        <label className="form-check-label" htmlFor ="7500Check">
                                                            7.500&nbsp;TL&nbsp;Üzeri&nbsp;<span>(73)</span>
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="50Check"/>
                                                        <label className="form-check-label" htmlFor ="50Check">
                                                            50-100&nbsp;TL&nbsp;Arası&nbsp;<span>(749)</span>
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="50altiCheck"/>
                                                        <label className="form-check-label" htmlFor ="50altiCheck">
                                                            50&nbsp;TL&nbsp;Altı&nbsp;<span>(364)</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#stok"><Icon.BinocularsFill className="categoriesIcon" /><span>STOK</span>                           
                                                    </button>
                                                </h2>
                                                <div id="stok" className="accordion-collapse collapse">
                                                    <div className="accordion-body">                              
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="stokCheck"/>
                                                            <label className="form-check-label" htmlFor ="stokCheck">
                                                                Stoklu&nbsp;Ürünler&nbsp;<span>(2.226)</span>
                                                            </label>
                                                        </div>                 
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-3">
                                                <h1 className="h4">Telefon</h1>
                                                <p>Hem en uygun fiyatlı hem son teknoloji telefon modelleri Teknosa'da! Telefon fiyatlarını ve telefon özelliklerini karşılaştırın, kullanıcı yorumlarını okuyun ve Teknosa güvencesiyle satın alın. Aradığınız telefon sizi bekliyor!</p>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="filtreDiv">
                        <button className="filtreButon" data-bs-target="#modalPopuler" data-bs-toggle="modal">
                            <span className="filtreYazi">Listeleme Seçenekleri</span>
                            <Icon.CardList className="filtreIcon" />
                        </button>
                        <div className="modal fade" id="modalPopuler">                          
                            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header d-flex">
                                        <h4 className="modal-title ms-auto">Listeleme&nbsp;Seçenekleri</h4>
                                        <button className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div className="modal-body" id="listelemeModalBody">
                                        <button className="listelemeButon" type="button">
                                            <Icon.StarFill className="listelemeIcon" /><span>En Popüler</span>
                                        </button>
                                        <button className="listelemeButon" type="button">
                                            <Icon.SortAlphaDown className="listelemeIcon" /><span>İsme Göre (A-Z)</span>
                                        </button>
                                        <button className="listelemeButon" type="button">
                                            <Icon.SortAlphaUp className="listelemeIcon" /><span>İsme Göre (Z-A)</span>
                                        </button>
                                        <button className="listelemeButon" type="button">
                                            <Icon.SortNumericUpAlt className="listelemeIcon" /><span>Fiyata Göre (Artan)</span>
                                        </button>
                                        <button className="listelemeButon" type="button">
                                            <Icon.SortNumericDownAlt className="listelemeIcon" /><span>Fiyata Göre (Azalan)</span>
                                        </button>
                                        <button className="listelemeButon" type="button">
                                            <Icon.PiggyBankFill className="listelemeIcon" /><span>İndirimli Ürünler</span>
                                        </button>
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

export default Filtreleme