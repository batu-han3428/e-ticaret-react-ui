import * as React from 'react';
import BirlikteAl from './BirlikteAl';
import MarkaStok from './MarkaStok';
import SepeteEkle from './SepeteEkle';
import TabMenu from './TabMenu';
import UrunBaslik from './UrunBaslik';
import UrunFiyat from './UrunFiyat';
import './UrunBilgileri.css';

const UrunBilgileri = () => {
    return (
        <div className="col-md-6" id="urunBilgileriSutun">
            <MarkaStok />
            <UrunBaslik />
            <div className="row">
                <div className="col-md-12" id="urunFiyatSepeteEkleSutun">
                    <UrunFiyat />
                    <SepeteEkle />
                </div>
            </div>
            <TabMenu />
            <BirlikteAl />
        </div>
        )
}

export default UrunBilgileri