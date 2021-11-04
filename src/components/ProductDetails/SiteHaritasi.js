import * as React from 'react';
import './SiteHaritasi.css';

const SiteHaritasi = () => {
    return (
        <div className="container" >
            <div className="row">
                <div className="col-md-12" id="siteHaritasiSutun">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a id="siteHaritasiLink" href="/">Ana Sayfa</a></li>
                        <li className="breadcrumb-item"><a id="siteHaritasiLink" href="../Telefonlar.html">Telefon</a></li>
                        <li className="breadcrumb-item"><a id="siteHaritasiLink" href="/#">Cep Telefonu</a></li>
                        <li className="breadcrumb-item"><a id="siteHaritasiLink" href="/#">Android Telefonlar</a></li>
                        <li className="breadcrumb-item active">XIAOMI Android Telefonlar</li>
                    </ol>
                </div>
            </div>
        </div>
        )
}

export default SiteHaritasi