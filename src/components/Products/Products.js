import * as React from 'react';
import SiteHaritasi from './SiteHaritasi';
import Filtreleme from './Filtreleme';
import ProductKategoriler from './ProductKategoriler';
import Filtre from './Filtre';
import Marka from './Marka';
import Urunler from './Urunler';
import Pagination from './Pagination';
import './Products.css';
import {connect} from 'react-redux'
import axios from 'axios'
import {listProducts} from '../../action/urunler';

const Products = (props) => {
    React.useEffect(() => {
        axios.get(`https://localhost:5001/api/Urunler/UrunGetir/${props.location.pathname.substring(1).toLowerCase()}`,).then(res => {
            props.dispatch(listProducts({
                products: res.data
            }))          
        });
    }, [props])
    
    return (
        <div className="container-fluid" style={{ backgroundColor: "rgb(243, 243, 243)", paddingBottom: "25px" }}>
            <SiteHaritasi />
            <Filtreleme />
            <div className="container">
                <div className="row">
                    <ProductKategoriler />
                    <div className="col-md-9" id="filtreIcerik">
                        <Filtre />
                        <Marka />
                        <Urunler />
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
        )
}

export default connect()(Products)