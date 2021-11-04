import React from 'react';
import SiteReklam from './SiteReklam';
import Slider from './Slider';
import GununFirsatiFoto from './GununFirsatiFoto';
import SliderKart from './SliderKart';
import PcReklam from './PcReklam';
import TanitimKart from './TanitimKart';

const Home = () => {
    return (
        <div className="container-fluid" style={{ backgroundColor: "rgb(243, 243, 243)", paddingBottom: "25px" }}>
            <SiteReklam />
            <div className="container mt-4">
                <div className="row mt-3">
                    <Slider />
                    <div className="row">
                        <div className="col-md-12 text-center mt-4">
                            <GununFirsatiFoto />
                        </div>
                    </div>                  
                </div>
            </div>
            <div className="container-fluid ">
                <SliderKart />
                <PcReklam />
            </div>
            <div className="container mt-3" style={{ backgroundColor: "white", boxShadow: "0px 2px rgb(221, 221, 221)" }}>
                {/*<Kategoriler />*/}
            </div>
            <div className="container" id="tanıtımKart">
               <TanitimKart />
            </div>
        </div>
        )
}

export default Home;