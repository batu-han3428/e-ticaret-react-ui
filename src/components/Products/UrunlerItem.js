import React from 'react'
import { Link } from 'react-router-dom'

const UrunlerItem = (product) => {
 
    return (
        <div className="col">
            <div className="card urunKartlari">
                <div className="kartlarFotoAlan">
                    <Link to={`/Telefon/${product.id}`}>                   
                        <img className="card-img-top kartlarFoto" src={require(`${product.fotograf}`).default} alt="xiomiNote8"/>
                    </Link>
                </div>
                <div className="card-body kartlarBody">
                    <div className="kartlarMarkaAlan">
                        <img className="kartlarMarka" src={require(`${product.markaFotograf}`).default} alt="xiomilogo" />
                    </div>
                    <div className="kartlarUrunAdAlan">
                        <span className="kartlarUrunAd"><a href="/#">{product.ad}</a></span>
                    </div>
                    <div className="kartlarTopveFiyatlar">                               
                        {product.indirimYuzde !== 0&&
                            <div className="kartlarTop">
                                <span className="card-text kartTopYazi">%{product.indirimYuzde}</span>
                            </div>
                        }                                                               
                        <div className="kartlarFiyatlar">                                
                            {product.indirimliFiyat !== 0?(
                            <>                                        
                                <span className="card-text indirim">{product.fiyat} TL</span>
                                <span className="card-text indirimliFiyat">{product.indirimliFiyat} TL</span>
                            </>):
                            (<span className="card-text">{product.fiyat} TL</span>)
                            }                                   
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default UrunlerItem
