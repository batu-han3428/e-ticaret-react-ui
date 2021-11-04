import * as React from 'react';
import * as Icon from 'react-bootstrap-icons';
import './UstAlan.css';
import { Link } from 'react-router-dom'

const UstAlan = () => {
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 mt-4 text-end" id="badges">         
                <span id="" className="badge text-muted"><Icon.GeoAltFill /> Mağaza Bul</span>
                <span id="" className="badge text-muted"><Icon.BoxSeam /> Kargom Nerede?</span>
                <span id="" className="badge text-muted"><Icon.InfoCircleFill /> Yardım Merkezi</span>
                <span id="" className="badge text-muted"><Icon.FileEarmarkMedical /> Garanti & İade</span>
                <span id="" className="badge text-muted"><Icon.ChatDotsFill /> İletişim</span>                 
            </div>
        </div>         
        <div className="row mt-4">
            <div className="col-md-2 me-5 align-self-center" id="foto">
                <Link to="/">
                    <img id="2" src={require('../../../img/logo.png').default} className="img-fluid" alt="logo"/>
                </Link>
                </div>
            <div className="col-md-4  d-flex align-items-center" id="ara">
                <form className="col-md-12">
                    <div className="input-group ">
                        <input type="search" id="form" placeholder="Ne Aramak İstersiniz" className="form-control" />
                        <a href="/#"><button id="buton" className="btn"><Icon.Search /></button></a>                          
                    </div>
                </form>
            </div>
            <div className="col-md-2 text-center" id="siparis">
                <h5 className="text-muted siparisHatti">                    
                        <Icon.Telephone/> <span className="siparisHattiYazi">Sipariş Hattı</span><span className="badge bg-warning ms-3 siparisHattiTel">
                                0850 345 6474
                        </span>
                </h5>
            </div>
            <div className="col-md-3 text-center" id="sepet">
                <button className="btn btn-outline-warning btn-lg" style={{ padding:"12px 18px", position: "relative" }} disabled>
                        <span className="badge rounded-pill bg-warning border border-light"
                            style={{ fontSize: "10px", position: "absolute",top:"10px", left: "33px", zIndex: 1 }}>
                            0
                        </span>
                        <Icon.CartFill style={{ fontSize: "30px", zIndex: 2, marginRight:"5px" }} />
                        <sub>Sepetim</sub>
                </button>
            </div>
        </div>
    </div>
    )
}

export default UstAlan