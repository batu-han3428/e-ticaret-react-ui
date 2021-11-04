import * as React from 'react';
import * as Icon from 'react-bootstrap-icons';
import './Bilgi.css';

const Bilgi = () => {
    return (
        <div className="container" id="yardimContainer">
            <div className="row mt-4">
                <div className="col-md-12" id="yardimSutun">
                    <div className="topAlanDivYardim">
                        <div className="topYardim" onClick={() => window.location.href = '#'}>                          
                            <Icon.TelephoneFill className="kategoriIkonYardim" />
                        </div>
                        <div className="yaziYardim">
                            <a href="/#">
                                <span className="musteri">Müşteri Hizmetleri</span>
                                <span className="no">0850 255 34 51</span>
                            </a>
                        </div>
                    </div>
                    <div className="topAlanDivYardim">
                        <div className="topYardim" onClick={() => window.location.href = '#'}>
                            <Icon.GeoAltFill className="kategoriIkonYardim" />
                        </div>
                        <div className="yaziYardim">
                            <a href="/#">
                                <span className="musteri"></span>
                                <span className="no">Mağazalarımız</span>
                            </a>
                        </div>
                    </div>
                    <div className="topAlanDivYardim">
                        <div className="topYardim" onClick={() => window.location.href = '#'}>
                            <Icon.QuestionLg className="kategoriIkonYardim" />
                        </div>
                        <div className="yaziYardim">
                            <a href="/#">
                                <span className="musteri"></span>
                                <span className="no">Yardım Merkezi</span>
                            </a>
                        </div>
                    </div>
                    <div className="topAlanDivYardim">
                        <div className="topYardim" onClick={() => window.location.href = '#'}>
                            <Icon.ArrowRepeat className="kategoriIkonYardim" />
                        </div>
                        <div className="yaziYardim">
                            <a href="/#">
                                <span className="musteri"></span>
                                <span className="no">Garanti & İade</span>
                            </a>
                        </div>
                    </div>
                    <div className="topAlanDivYardim">
                        <div className="topYardim" onClick={() => window.location.href = '#'}>
                            <Icon.EnvelopeFill className="kategoriIkonYardim" />
                        </div>
                        <div className="yaziYardim">
                            <a href="/#">
                                <span className="musteri"></span>
                                <span className="no">İletişim</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Bilgi