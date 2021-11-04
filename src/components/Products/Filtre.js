import * as React from 'react';

const Filtre = () => {
    return (
        <div className="row">
            <div className="col-md-12 p-4" id="icerikEnUst">
                <div className="me-auto">
                    <span><b>Telefon</b> için 2308 ürün bulundu</span>
                </div>
                <div id="filtreBuyukEkran">
                    <select defaultValue={'0'} className="form-select form-select-sm p-2">
                        <option value="default" disabled>Seçiniz...</option>
                        <option value="0">En Popüler</option>
                        <option value="1">İsme Göre (A-Z)</option>
                        <option value="2">İsme Göre (Z-A)</option>
                        <option value="3">Fiyata Göre (Artan)</option>
                        <option value="4">Fiyata Göre (Azalan)</option>
                        <option value="5">İndirimli Ürünler</option>
                    </select>
                </div>
            </div>
        </div>
        )
}

export default Filtre