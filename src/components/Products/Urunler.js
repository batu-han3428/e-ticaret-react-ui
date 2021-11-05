import React from 'react';
import {connect} from 'react-redux'
import UrunlerItem from './UrunlerItem';

const Urunler = (props) => {
    return (            
            <div className="row row-cols-2 row-cols-md-4 gx-0 pt-5">
                {
                    props.products.map(product=>{return <UrunlerItem key={product.id} {...product} />})
                }                      
            </div>
        )
}

const mapStateToProps = (state) =>{  
    return {
        products:state.urunler
    }
}
export default connect(mapStateToProps)(Urunler)
