import React from 'react';
import {connect} from 'react-redux'
import Loader from '../Loader/Loader';
import UrunlerItem from './UrunlerItem';
import Pagination from './Pagination';

const Urunler = (props) => {
    
    return (   
         <>
            {props.loading === true?
                <Loader />:
                <>
                <div className="row row-cols-2 row-cols-md-4 gx-0 pt-5">
                    {props.products.length >0?props.products[0].$values.map(product=>{return <UrunlerItem key={product.id} {...product} />}):"" }                                     
                </div>
                <Pagination pathname={props.pathname} /> 
                </>
            }
        </>
        )
}

const mapStateToProps = (state) =>{  
    return {
        products:state.urunBilgileri.urunler || [] ,
        loading:state.loader    
    }
}
export default connect(mapStateToProps)(Urunler)
