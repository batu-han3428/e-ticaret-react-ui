import * as React from 'react';
import OdemeSecenekleri from './OdemeSecenekleri';
import AlisverisKredisiSecenekleri from './AlisverisKredisiSecenekleri';
import Bilgi from './Bilgi';
import AciklamaMetni from './AciklamaMetni';
import UrunKategoriKurumsal from './UrunKategoriKurumsal';
import HaklariSaklidir from './HaklariSaklidir';

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid" style={{backgroundColor:"white", paddingBottom: "50px"}}>
                <OdemeSecenekleri />
                <AlisverisKredisiSecenekleri />
                <Bilgi />
                <AciklamaMetni />
            </div>
            <div className="container-fluid border-bottom" style={{ backgroundColor: "#FAFAFA", paddingBottom: "70px" }}>
                <UrunKategoriKurumsal />
            </div>
            <div className="container-fluid" style={{ backgroundColor: "white" }}>
                <HaklariSaklidir />
            </div>
        </footer>
    )
}

export default Footer