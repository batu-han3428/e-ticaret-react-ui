import React, { useEffect } from 'react';
import './TeknikOzellikler.css';
import $ from "jquery";

const TeknikOzellikler = () => {
    useEffect(() => {
       islem();
    }, [])

    function islem(){

        $("#urunAciklamasiIcerik").show();

        $("#urunAciklamasi, #urunAciklamasi > a").css({

            "background-color": "white",
            "color": "rgb(255, 123, 0)",
            "border-top": "1px solid rgb(255, 123, 0)"

        });

        $("#teknikOzellikler").css({

            "border-right": "1px solid white",
            "border-left": "1px solid white"


        });

        $("#urunAciklamasi").click(function () {

            $("#teknikOzelliklerIcerik").hide();
            $("#taksitSecenekleriIcerik").hide();
            $("#urunAciklamasiIcerik").show();

            $("#urunAciklamasi, #urunAciklamasi > a").css({

                "background-color": "white",
                "color": "rgb(255, 123, 0)",
                "border-top": "1px solid rgb(255, 123, 0)"

            });

            $("#teknikOzellikler, #teknikOzellikler > a, #taksitSecenekleri, #taksitSecenekleri > a").css({

                "background-color": "rgb(163, 155, 139)",
                "color": "#fff",
                "border-top": "0"

            });

        });

        $("#teknikOzellikler").click(function () {

            $("#urunAciklamasiIcerik").hide();
            $("#taksitSecenekleriIcerik").hide();
            $("#teknikOzelliklerIcerik").show();

            $("#teknikOzellikler, #teknikOzellikler > a").css({

                "background-color": "white",
                "color": "rgb(255, 123, 0)",
                "border-top": "1px solid rgb(255, 123, 0)"

            });

            $("#urunAciklamasi, #urunAciklamasi > a, #taksitSecenekleri, #taksitSecenekleri > a").css({

                "background-color": "rgb(163, 155, 139)",
                "color": "#fff",
                "border-top": "0"

            });

        });

        $("#taksitSecenekleri").click(function () {

            $("#urunAciklamasiIcerik").hide();
            $("#teknikOzelliklerIcerik").hide();
            $("#taksitSecenekleriIcerik").show();

            $("#taksitSecenekleri, #taksitSecenekleri > a").css({

                "background-color": "white",
                "color": "rgb(255, 123, 0)",
                "border-top": "1px solid rgb(255, 123, 0)"

            });

            $("#teknikOzellikler, #teknikOzellikler > a, #urunAciklamasi, #urunAciklamasi > a").css({

                "background-color": "rgb(163, 155, 139)",
                "color": "#fff",
                "border-top": "0"

            });

        });
    }

    return (
         <div className="container">
            <div className="row">
                    <div className="col-md-12" id="teknikOzelliklerTabMenuSutun">
                        <ul id="teknikOzelliklerTabMenu">
                            <li className="teknikOzelliklerTabMenuItem" id="urunAciklamasi">
                                <a className="teknikOzelliklerTabMenuLink" href="javascript:void(0)">Ürün Açıklaması</a>                   
                            </li>
                            <li className="teknikOzelliklerTabMenuItem" id="teknikOzellikler">
                                <a className="teknikOzelliklerTabMenuLink" href="javascript:void(0)">Teknik Özellikler</a>
                            </li>
                            <li className="teknikOzelliklerTabMenuItem" id="taksitSecenekleri">
                                <a className="teknikOzelliklerTabMenuLink" href="javascript:void(0)">Taksit Seçenekleri</a>
                            </li>              
                        </ul>
                        <div id="teknikOzelliklerIcerikKismi">
                            <div id="urunAciklamasiIcerik">                    
                                <div id="urunAciklamasiIcerikBaslikAlan">
                                <span className="h3">Xiaomi Redmi Note 8 4GB/64GB Mavi Akıllı Telefon</span>
                                </div>
                                <div id="urunAciklamasiIcerikYaziAlan">
                                    <span id="urunAciklamasiIcerikYaziSpan">Ürün İçeriğine Kulaklık Dahil Değildir.</span>
                                    <p id="urunAciklamasiIcerikYaziParagraf">48MP Dörtlü Kamera All Star 48MP AI dört kamera Qualcomm® Snapdragon™ 665 4000mAh yüksek kapasiteli pil Popüler renklerde 2.5D cam kaplama Daha küçük ekran altı boşluk ve çerçeve %90 yüksek ekran-gövde oranı 48MP ultra yüksek çözünürlük Telefonun ekran çözünürlüğünün neredeyse 19 katı çözünürlükte fotoğraflar Uzaktaki posterleri net bir şekilde çıkarabilirsiniz 120° bozulma önleyici ultra geniş açılı kamera Göz alıcı manzara fotoğrafları için daha geniş görüş Keyifli seyahatlerinizi kaydedin Güzelliğinizi ortaya çıkartan portreler Derinlik kamerası Ayarlanabilir arkaplan bulanıklaştırma Kalabalıkta sıyrılan şaheserler çekin 2cm makro lens En ince ayrıntıyı bile yakalayın 13MP Kamera Güzelleştirme filtreleri ile profesyonel portre özçekimleri Qualcomm® Snapdragon™ 665 Sekiz çekirdekli işlemci Olağanüstü oyun deneyimi 1217 süper lineer hoparlörler Yüksek sesten daha fazlası — mükemmel ses kalitesi Gizli özellik: Otomatik Hoparlör Temizleme
                                    </p>
                                </div>
                            </div>
                            <div id="teknikOzelliklerIcerik">              
                            <table className="table">                      
                                <tbody>
                                    <tr>
                                        <td className="teknikOzelliklerIcerikTabloBaslik"><h5>Paket İçeriği</h5></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                            <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                <span>Ekran boyutu</span>
                                            </div>
                                            <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                <span>6.3 ''</span>
                                            </div>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                            <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                <span>Pakete dahil kablolar</span>
                                            </div>
                                            <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                <span>USB C Tipi</span>
                                            </div>
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                            <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                                <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>Hızlı başlangıç rehberi</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>Evet</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                                <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>AC sarma adaptör</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>Evet</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td style={{borderBottom: "0"}} className="teknikOzelliklerIcerikTabloYaziSutun">
                                                <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>Kullanım kılavuzu</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>Evet</span>
                                                </div>
                                            </td>
                                            <td style={{borderBottom: "0"}}></td>
                                        </tr>                               
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloBaslik"><h5>Ekran</h5></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                        <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                            <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>Ekran boyutu</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>6.3 ''</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                                <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>Ekran şekli</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>Düz</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                                <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>Ekran türü</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>IPS</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                                <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>En boy oranı</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>19.5:9</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                                <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>Dokunmatik ekran</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>Evet</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                                <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>Ekran cam türü</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>Gorilla Glass</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                                <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>Görüntülenen renk sayısı</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>16 milyon renk</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                                <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>Piksel yoğunluğu</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>409 ppi</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                                <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>Yerel açı oranı</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>19.5:9</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                                <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>Ekran çözünürlüğü</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>2340 x 1080 Piksel</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloBaslik"><h5>Kamera</h5></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                        <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                            <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>Arka Kamera Çözünürlüğü</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>48 MP</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                                <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>Ön Kamera Çözünürlüğü</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>13 MP</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                                <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>İşletim sistemi yazılımı</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>Android 9.0</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                                <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>Ön kamera tipi</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>Tek kamera</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                                <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>Arka kamera tipi</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>Dörtlü kamera</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                                <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>Desteklenen video formatları</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>M4V, MKV, MP4, XVID</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                                <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>Oto fokus</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>Evet</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloBaslik"><h5>Ağırlık & Boyutlar</h5></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                        <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                            <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>Ağırlık</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>190 g</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                                <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>Yükseklik</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>158, 3 mm</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                                <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>Genişlik</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>75, 3 mm</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="teknikOzelliklerIcerikTabloYaziSutun">
                                                <div className="teknikOzelliklerIcerikYaziOzellikAdAlan">
                                                    <span>Derinlik</span>
                                                </div>
                                                <div className="teknikOzelliklerIcerikYaziOzellikAlan">
                                                    <span>8, 35 mm</span>
                                                </div>
                                            </td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                            </table>
                            </div>
                            <div id="taksitSecenekleriIcerik">
                                <div className="row" id="taksitSecenekleriIcerikSatir">                                      
                                    <div className="col-md-4 pb-3">
                                        <div className="taksitSecenekleriIcerikFotoAlan">
                                            <img className="taksitSecenekleriIcerikFoto" src={require('./TeknikOzelliklerImg/credit-card-Axess.png').default} alt="axessLogo" />
                                        </div>
                                        <div className="taksitSecenekleriBaslikveYazilari">
                                            <div className="taksitSecenekleriIcerikBasligi">
                                                <div>
                                                    <span>TAKSİT SAYISI</span>
                                                </div>
                                                <div>
                                                    <span>AYLIK TUTAR</span>
                                                </div>
                                                <div>
                                                    <span>TOPLAM</span>
                                                </div>                                   
                                            </div>
                                            <div className="taksitSecenekleriIcerikYazisi">
                                                <div>
                                                    <span>1</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>     
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 pb-3">
                                        <div className="taksitSecenekleriIcerikFotoAlan">
                                        <img className="taksitSecenekleriIcerikFoto" src={require('./TeknikOzelliklerImg/credit-card-Bonus.png').default} alt=""/>
                                        </div>
                                        <div className="taksitSecenekleriBaslikveYazilari">
                                            <div className="taksitSecenekleriIcerikBasligi">
                                                <div>
                                                    <span>TAKSİT SAYISI</span>
                                                </div>
                                                <div>
                                                    <span>AYLIK TUTAR</span>
                                                </div>
                                                <div>
                                                    <span>TOPLAM</span>
                                                </div>                                   
                                            </div>
                                            <div className="taksitSecenekleriIcerikYazisi">
                                                <div>
                                                    <span>1</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>     
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 pb-3">
                                        <div className="taksitSecenekleriIcerikFotoAlan">
                                        <img className="taksitSecenekleriIcerikFoto" src={require('./TeknikOzelliklerImg/credit-card-Cardfinans.png').default} alt=""/>
                                        </div>
                                        <div className="taksitSecenekleriBaslikveYazilari">
                                            <div className="taksitSecenekleriIcerikBasligi">
                                                <div>
                                                    <span>TAKSİT SAYISI</span>
                                                </div>
                                                <div>
                                                    <span>AYLIK TUTAR</span>
                                                </div>
                                                <div>
                                                    <span>TOPLAM</span>
                                                </div>                                   
                                            </div>
                                            <div className="taksitSecenekleriIcerikYazisi">
                                                <div>
                                                    <span>1</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>     
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 pb-3">
                                        <div className="taksitSecenekleriIcerikFotoAlan">
                                        <img className="taksitSecenekleriIcerikFoto" src={require('./TeknikOzelliklerImg/credit-card-World.png').default} alt=""/>
                                        </div>
                                        <div className="taksitSecenekleriBaslikveYazilari">
                                            <div className="taksitSecenekleriIcerikBasligi">
                                                <div>
                                                    <span>TAKSİT SAYISI</span>
                                                </div>
                                                <div>
                                                    <span>AYLIK TUTAR</span>
                                                </div>
                                                <div>
                                                    <span>TOPLAM</span>
                                                </div>                                   
                                            </div>
                                            <div className="taksitSecenekleriIcerikYazisi">
                                                <div>
                                                    <span>1</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>     
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 pb-3">
                                        <div className="taksitSecenekleriIcerikFotoAlan">
                                        <img className="taksitSecenekleriIcerikFoto" src={require('./TeknikOzelliklerImg/credit-card-Bankkart.png').default} alt="" />
                                        </div>
                                        <div className="taksitSecenekleriBaslikveYazilari">
                                            <div className="taksitSecenekleriIcerikBasligi">
                                                <div>
                                                    <span>TAKSİT SAYISI</span>
                                                </div>
                                                <div>
                                                    <span>AYLIK TUTAR</span>
                                                </div>
                                                <div>
                                                    <span>TOPLAM</span>
                                                </div>                                   
                                            </div>
                                            <div className="taksitSecenekleriIcerikYazisi">
                                                <div>
                                                    <span>1</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>     
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 pb-3">
                                        <div className="taksitSecenekleriIcerikFotoAlan">
                                        <img className="taksitSecenekleriIcerikFoto" src={require('./TeknikOzelliklerImg/credit-card-Maximum.png').default}alt="maximumLogo" />
                                        </div>
                                        <div className="taksitSecenekleriBaslikveYazilari">
                                            <div className="taksitSecenekleriIcerikBasligi">
                                                <div>
                                                    <span>TAKSİT SAYISI</span>
                                                </div>
                                                <div>
                                                    <span>AYLIK TUTAR</span>
                                                </div>
                                                <div>
                                                    <span>TOPLAM</span>
                                                </div>                                   
                                            </div>
                                            <div className="taksitSecenekleriIcerikYazisi">
                                                <div>
                                                    <span>1</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>     
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 pb-3">
                                        <div className="taksitSecenekleriIcerikFotoAlan">
                                        <img className="taksitSecenekleriIcerikFoto" src={require('./TeknikOzelliklerImg/credit-card-Paraf.png').default} alt="parafLogo" />
                                        </div>
                                        <div className="taksitSecenekleriBaslikveYazilari">
                                            <div className="taksitSecenekleriIcerikBasligi">
                                                <div>
                                                    <span>TAKSİT SAYISI</span>
                                                </div>
                                                <div>
                                                    <span>AYLIK TUTAR</span>
                                                </div>
                                                <div>
                                                    <span>TOPLAM</span>
                                                </div>                                   
                                            </div>
                                            <div className="taksitSecenekleriIcerikYazisi">
                                                <div>
                                                    <span>1</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>
                                                <div>
                                                    <span>2.999 TL</span>
                                                </div>     
                                            </div>
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

export default TeknikOzellikler