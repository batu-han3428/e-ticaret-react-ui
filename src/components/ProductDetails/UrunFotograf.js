import * as React from 'react';
import './UrunFotograf.css';
import * as Icon from 'react-bootstrap-icons';
import './UrunFotografJs.js';

const UrunFotograf = () => {
    return (
        <div className="col-md-6 border-end" id="ucretsizKargoUrunFotografSutun">

            {/*Ücretsiz Kargo*/}
            <div style={{ marginTop: "10px" }}>
                <div id="ucretsizKargo">
                    <div id="ucretsizKargoIconAlan">
                        <Icon.Truck id="ucretsizKargoIcon" />
                    </div>
                    <div id="ucretsizKargoYaziAlan">
                        <span id="ucretsizKargoYazi">Ücretsiz Kargo</span>
                    </div>
                </div>
            </div>
            {/*Ücretsiz Kargo */}

            {/*Ürün Fotoğraf*/}
            <div id="KontrolTusuTetikle1" className="carousel slide slider1">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div id="kartlarFotoAlan" data-bs-target="#xiomiredmi4foto" data-bs-toggle="modal">
                            <img id="kartlarFoto" src={require('./UrunFotografImg/34867488.png').default} alt="xiomiNote8"/>
                        </div>
                        <div className="modal fade" id="xiomiredmi4foto">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <button style={{ marginLeft: "auto" }} className="btn-close" data-bs-dismiss="modal"></button>
                                    <div className="modal-body">
                                        <img className="card-img-top kartlarFoto" src={require('./UrunFotografImg/34867488.png').default} alt="xiomiNote8Modal"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12" id="tuslar">
                    <div>
                        <button className="tusButonlari" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="0">
                            <div id="kartlarFotoAlanTus">
                                <img id="kartlarFotoTus" src={require('./UrunFotografImg/34867488.png').default} alt="xiomiNote8Tus"/>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {/*Ürün Fotoğraf*/}
        </div>
        )
}

export default UrunFotograf