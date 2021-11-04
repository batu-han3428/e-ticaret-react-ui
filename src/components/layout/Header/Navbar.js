import * as React from 'react'
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {

    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-warning" id="nav">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuAc">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="menuAc">
                        <ul id="menu" className="navbar-nav me-auto mb-2 mb-lg-0">
                            <div className="nav-item" style={{ borderRight: "1px solid white", height: "45px" }}></div>
                            <li className="nav-item dropdown">
                                <a className="nav-link active ms-3 me-3" style={{ cursor: "default" }} role="button" id="acilirmenu" href="/#">
                                    Tüm Ürünler
                                </a>
                                <ul id="dropdown-menu" className="dropdown-menu border border-1">
                                    <li><Link className="dropdown-item" to="/Telefon"><Icon.Phone className="me-3" />Telefon</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="/#"><Icon.Laptop className="me-3" />Bilgisayar</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/#">
                                            <Icon.Tv className="me-3" />Tv,Ses ve Görüntü
                                            Sistemleri
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/#">
                                            <Icon.House className="me-3" />Beyaz Eşya ve
                                            Ankastre
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/#">
                                            <Icon.Hammer className="me-3" />Elektrikli Ev
                                            Aletleri ve Yaşam
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/#">
                                            <Icon.Heart className="me-3" />Kişisel Bakım Ve
                                            Sağlık
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/#">
                                            <Icon.Controller className="me-3" />Oyun
                                            Konsolları,Hobi ve Eğlence
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/#">
                                            <Icon.Camera className="me-3" />Fotoğraf
                                            Makinesi
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/#">
                                            <Icon.Briefcase className="me-3" />Ofis Malzemeleri
                                            ve Mobilyaları
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/#">
                                            <Icon.Watch className="me-3" />Aksesuarlar
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/#">
                                            <Icon.ShieldCheck className="me-3" />Kurulum Destek
                                            Paketleri
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <div className="nav-link" style={{ padding: "0px", borderLeft: "1px solid white", height: "45px" }}></div>
                            <li className="nav-item dropdown" id="markalarLi">
                                <a className="nav-link  active ms-3 me-3" href="Markalar/Markalar.html" role="button" id="acilirmenu1">
                                    Markalar
                                </a>
                                <ul id="dropdown-menu1"
                                    className="dropdown-menu border border-1 border-left-0 border-right-0 col-md-12">
                                    <li><span className="text-muted ms-5" style={{ cursor: "default" }}>Öne Çıkan Markalar</span></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li className="marka ms-5" id="apple">
                                        <figure className="figure">
                                            <img src={require('./NavbarImg/logo_apple_19.webp').default} className="figure-img img-fluid" alt="" />
                                            <a href="Markalar/Marka_Icerik/Apple.html" className="nav-link">
                                                <figcaption className="figure-caption text-center figcaption">Apple</figcaption>
                                            </a>
                                        </figure>
                                    </li>
                                    <li className="marka">
                                        <figure className="figure" id="samsung">                                        
                                            <img src={require('./NavbarImg/logo_samsung_19.webp').default} className="figure-img img-fluid" alt="" />
                                            <a href="/#" className="nav-link">
                                                <figcaption className="figure-caption text-center figcaption">Samsung</figcaption>
                                            </a>
                                        </figure>
                                    </li>
                                    <li className="marka" id="casper">
                                        <figure className="figure">                                            
                                            <img src={require('./NavbarImg/category_logo_casper.webp').default} className="figure-img img-fluid" alt="" />
                                            <a href="/#" className="nav-link">
                                                <figcaption className="figure-caption text-center figcaption">Casper</figcaption>
                                            </a>
                                        </figure>
                                    </li>
                                    <li className="marka" id="huawei">
                                        {/*id yi mobile uyum için koydum*/}
                                        <figure className="figure">                                           
                                            <img src={require('./NavbarImg/category_logo_huawei.webp').default}className="figure-img img-fluid" alt="" />
                                            <a href="/#" className="nav-link">
                                                <figcaption className="figure-caption text-center figcaption">Huawei</figcaption>
                                            </a>
                                        </figure>
                                    </li>
                                    <li className="marka" id="preo">
                                        <figure className="figure">                                         
                                            <img src={require('./NavbarImg/logo_preo_19.webp').default}className="figure-img img-fluid" alt="" />
                                            <a href="/#" className="nav-link">
                                                <figcaption className="figure-caption text-center figcaption">Preo</figcaption>
                                            </a>
                                        </figure>
                                    </li>
                                    <li className="marka" id="bosch">
                                        <figure className="figure">                                           
                                            <img src={require('./NavbarImg/category_logo_bosch.webp').default} className="figure-img img-fluid" alt="" />
                                            <a href="/#" className="nav-link">
                                                <figcaption className="figure-caption text-center figcaption">Bosch</figcaption>
                                            </a>
                                        </figure>
                                    </li>
                                    <hr className="dropdown-dvider" />
                                    <li className="text-center" id="altmarkalar">
                                        <a href="/#" style={{ color: "white !important" }}>                                            <img src={require('./NavbarImg/category_logo_realme.webp').default} className="img-fluid" alt="" />
                                        </a>
                                        <a href="/#" style={{ color: "white!important" }}>                               
                                            <img src={require('./NavbarImg/monster_logo_200619.webp').default}
                                                className="img-fluid" alt="" />
                                        </a>
                                        <a href="/#" style={{ color: "white !important" }}>   
                                            <img src={require('./NavbarImg/xiaomi_yeni_210415.webp').default}
                                                className="img-fluid" alt="" />
                                        </a>
                                        <a href="/#" style={{ color: " white!important" }}>  
                                            <img src={require('./NavbarImg/category_logo_asus.webp').default}
                                                className="img-fluid " alt="" />
                                        </a>
                                        <a href="/#" style={{ color: " white !important" }}>
                                            <img src={require('./NavbarImg/logo_lg.webp').default}
                                                className=" img-fluid " alt="" />
                                        </a>
                                        <a href="/#" style={{ color: "white !important" }}>
                                            <img src={require('./NavbarImg/category_logo_dyson.webp').default}
                                                className=" img-fluid" alt="" />
                                        </a>
                                        <a href="/#" style={{ color: "white !important" }}>
                                            <img src={require('./NavbarImg/logo-philips.png').default}
                                                className=" img-fluid" id="philips" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <div className="nav-link " style={{ padding: "0px", borderRight: "1px solid white", height: "45px" }}></div>
                            <li className="nav-item ">
                                <Link className="nav-link active ms-3 me-3" to="/Hakkimizda">Hakkımızda</Link>
                            </li>
                            <div className="nav-link" style={{ padding: "0px", borderRight: " 1px solid white", height: "45px" }}></div>
                            <li className="nav-item">
                                <a className="nav-link active ms-3 me-3" href="/#">Outlet</a>
                            </li>
                            <div className="nav-link" style={{ padding: "0", borderRight: "1px solid white", height: "45px" }}></div>
                        </ul>
                        <div className="d-flex" id="flex">
                            <span className="badge rounded-pill " style={{ fontSize: "20px", cursor: "pointer" }} data-bs-target="#uyeKayit"
                                data-bs-toggle="modal" id="uye ol">
                                Üye Ol
                            </span>
                            <span id="uye" className="badge bg-warning ms-4"
                                style={{ fontSize: "20px", cursor: "pointer" }} data-bs-target="#uyeGiris"
                                data-bs-toggle="modal">
                                <Icon.PersonCircle style={{marginBottom:"5px"}} /> Üye Girişi
                            </span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Üye Ol*/}
                <div className="modal fade" id="uyeKayit" data-bs-backdrop="static">
                <div className="modal-dialog modal-dialog-scrollable modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Üyelik Kaydı</h5>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <form className="needs-validation modal-body" noValidate>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label">Ad</label>
                                    <input type="text" className="form-control" placeholder="Ad" required />
                                    <div className="invalid-feedback">
                                        Bu Alan Boş Geçilemez
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Soyad</label>
                                    <input type="text" className="form-control" placeholder="Soyad" required />
                                    <div className="invalid-feedback">
                                        Bu Alan Boş Geçilemez
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder="Mail" required />
                                    <div className="invalid-feedback">
                                        Bu Alan Boş Geçilemez
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label className="form-label">Tc</label>
                                    <input type="number" className="form-control" placeholder="Tc No" required />
                                    <div className="invalid-feedback">
                                        Bu Alan Boş Geçilemez
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Parola</label>
                                    <input type="password" className="form-control" placeholder="Parola" required />
                                    <div className="invalid-feedback">
                                        Bu Alan Boş Geçilemez
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Parola Tekrar</label>
                                    <input type="password" className="form-control" placeholder="Parola" required />
                                    <div className="invalid-feedback">
                                        Bu Alan Boş Geçilemez
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Adres</label>
                                    <textarea className="form-control" style={{ height: 200 }} placeholder="Apartment, studio, or floor"
                                        required></textarea>
                                    <div className="invalid-feedback">
                                        Bu Alan Boş Geçilemez
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">İl</label>
                                    <input type="text" className="form-control" required />
                                    <div className="invalid-feedback">
                                        Bu Alan Boş Geçilemez
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">İlçe</label>
                                    <select className="form-select" required>
                                        <option disabled>İlçe Seçiniz..</option>
                                        <option>Beylikdüzü</option>
                                        <option>Büyükçekmece</option>
                                        <option>Silivri</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Bu Alan Boş Geçilemez
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-danger" data-bs-dismiss="modal">Geri</button>
                                <button className="btn btn-success" type="submit">Kayıt Ol</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*/Üye Ol*/}

            {/*Üye Giriş*/}
                <div className="modal fade" id="uyeGiris" data-bs-backdrop="static">
                <div className="modal-dialog modal-dialog-scrollable modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Üye Giriş</h5>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <form className="needs-validation text-center" style={{ marginLeft: "34%" }} noValidate>
                            <div className="row g-3 mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder="Mail" required />
                                    <div className="invalid-feedback">
                                        Bu Alan Boş Geçilemez
                                    </div>
                                </div>
                            </div>
                            <div className="row g-3 mb-3">
                                <div className="col-md-6">
                                    <label className="form-label">Parola</label>
                                    <input type="password" className="form-control" placeholder="Parola" required />
                                    <div className="invalid-feedback">
                                        Bu Alan Boş Geçilemez
                                    </div>
                                </div>
                            </div>
                            <div className="row g-3 mb-3">
                                <div className="col-md-6">
                                    <button className="btn btn-outline-warning w-100" type="submit">Giriş</button>
                                </div>
                            </div>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <button className="btn btn-outline-danger w-100" data-bs-dismiss="modal">Geri</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>          
            {/*/Üye Giriş*/}
        </>
    )
}

export default Navbar