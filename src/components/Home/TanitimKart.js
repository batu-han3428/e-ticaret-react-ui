import * as React from 'react';
import './TanitimKart.css';

const TanitimKart = () => {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-3">
           
                <div className="col">
                    <a href="/#">
                        <div id="" className="card tanitimKartlari">
                            <img className="card-img" src={require('./TanitimKartImg/widget_kadinicin_teknoloji_210416.webp').default} alt="" />
                            <div className="card-img-overlay">

                            </div>
                        </div>
                    </a>
                </div>
                <div className="col">
                        <a href="/#">
                            <div id="" className="card tanitimKartlari">
                                <img className="card-img" src={require('./TanitimKartImg/widget_teknosacell_210331.webp').default} alt="" />
                                <div className="card-img-overlay">

                                </div>
                            </div>
                        </a>
                </div>
                <div className="col">
                        <a href="/#">
                            <div id="" className="card tanitimKartlari">
                                <img className="card-img" src={require('./TanitimKartImg/widget_apple_210405.webp').default} alt="" />
                                <div className="card-img-overlay">

                                </div>
                            </div>
                        </a>
                </div>
                <div className="col">
                        <a href="/#">
                            <div id="" className="card tanitimKartlari">
                                <img className="card-img" src={require('./TanitimKartImg/widget_ayd_210331.webp').default} alt="" />
                                <div className="card-img-overlay">

                                </div>
                            </div>
                        </a>
                </div>
        </div>
        )
}

export default TanitimKart