import * as React from 'react';
import UrunBilgileri from './UrunBilgileri';
import UrunFotograf from './UrunFotograf';

const UrunIcerik = () => {
    return (
        <div className="container" style={{backgroundColor: "white"}}>
            <div className="row">
                <UrunFotograf />
                <UrunBilgileri />
            </div>
        </div>
        )
}

export default UrunIcerik