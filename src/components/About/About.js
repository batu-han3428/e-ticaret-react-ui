import * as React from 'react';
import SiteHaritasi from '../SiteMap/SiteHaritasi';
import './About.css';

const About = (props) => {
    return (
        <div className="container-fluid" id="body">
            <div className="icerikAbout">

                {/*Site Haritası */}
                <SiteHaritasi pathname={props.location.pathname} />
                {/*/Site Haritası */}

                {/*Hakkımızda Fotoğraf, Hakkımızda İçerik */}
                <div className="container">

                     {/*Hakkımızda Fotoğraf*/}
                    <div className="row">
                        <div className="col-md-12">
                            <div id="hakkimizdaFotograf1Alan">
                                <img id="hakkimizdaFotograf1" className="img-fluid" src={require('./AboutImg/holding-nedir.jpg').default} alt=""/>
                            </div>
                        </div>
                    </div>
                     {/*/Hakkımızda Fotoğraf */}

                    {/*Hakkımızda Yazı*/}
                    <div className="row" >
                        <div className="col-md-12 pt-3">
                            <h1 id="hakkmizdaYaziBaslik">Hakkımızda</h1>
                            <p className="aboutYazi">1998 yılında "En yeni iletişim ve bilgisayar teknolojilerini kullanarak müşterilerine dünya standartlarında çözümler sunmak" ilkesiyle yola çıkan isimtescil.net, geçen 16 yıllık süreçte Dünya ve Türkiye’ye, en büyük domain ve hosting firmalarından biri olmayı başarmıştır.

                                2008 yılında alan adları standartlarını belirleyen ve denetleyen tek otorite ICANN'e akredite olan isimtescil.net, 2010 yılından beri Türkiye'nin en büyük 500 bilişim şirketi arasında yer almakta ve kurulduğu günden buyana 1 milyonun üzerinde domain kaydı ve 200 bininin üzerinde barındırma hizmetne ev sahipliği yapmıştır.</p>
                        </div>
                    </div>
                   {/*/Hakkımızda Yazı */}


                    <div className="row">

                        {/* Hakkımızda Fotoğraf */}
                        <div className="col-md-6">
                            <div id="hakkimizdaFotograf2Alan">
                                <img id="hakkimizdaFotograf2" className="img-fluid" src={require('./AboutImg/unlu-teknoloji-magazasi-119-subesini-kapatiyor-binlerce-kisi-issiz-kalacak_1471a.jpg').default} alt="" />
                            </div>
                        </div>
                       {/* /Hakkımızda Fotoğraf*/}

                        {/* Hakkımızda Yazı*/}
                        <div className="col-md-6 pt-2">
                            <p className="aboutYazi">45 kişilik ekibi ile 7/24 destek operasyonunu sürdüren ve sürekli Ar-Ge politikası ile kendi altyapı yatırımlarını yöneten isimtescil.net, 2013 yılında Türkiye'de ilk kez yeni domain uzantıları için ön talep sürecini başlatmış ve bu süreçte 1 milyonun üzerinde talep toplayarak Afrika, Asya ve Doğu Avrupada en fazla talep toplayan şirket ünvanını almıştır.

                                isimtescil.net aynı zamanda .tr uzantılarının Türkiye’deki yetkili operatörlerinden biridir. .tr uzantılı domain kaydediciler arasında en fazla işlem hacmine sahip firmadır. isimtescil.net tamamen kendi bünyesinde bulunan yazılım ekibi ile geliştirdiği Domain Management (Domain Yönetimi) otomasyonuna sahiptir. Bu otomasyon sayesinde kullanıcılarına dünya standartlarında online domain kaydetme ve tüm domain operasyonlarını web tabanlı ara yüzümüzden yönetebilme özgürlüğü sunmaktadır. Aynı arayüze entegre çalışan hosting otomasyon sistemi ile hosting kullanım kolaylığı ve tek arayüzden çoklu hizmet yönetimi sağlama kabiliyetinde olan firma, 2010 yılında tüm barındırma altyapısını cloud (bulut) üzerine taşımış ve bu sayede mnimum maliyet/maksimum performans ölçeğini tüm müşterilerine ulaştırabilmiştir.</p>
                        </div>
                         {/*/Hakkımızda Yazı */}

                    </div>
                </div>
                {/* /Hakkımızda Fotoğraf, Hakkımızda İçerik */}

            </div>
        </div>
        )
}

export default About;