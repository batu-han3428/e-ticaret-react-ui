import * as React from 'react';

const UrunFiyat = () =>{
    return (
        <div id="urunFiyatTopveFiyatlar">
            <div id="urunFiyatTop">
                <span id="urunFiyatTopYazi">%9 İndirim</span>
            </div>
            <div id="urunFiyatFiyatlar">
                <span style={{ display: "none" }} id="urunFiyatAsilFiyati">2.999 TL</span>
                <span id="urunFiyatIndirim">3.099 TL</span>
                <span id="urunFiyatIndirimliFiyat">2.999 TL</span>
            </div>
        </div>
        )
}

export default UrunFiyat