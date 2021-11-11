import React, { useEffect } from 'react';
import SiteHaritasi from './SiteHaritasi';
import Filtreleme from './Filtreleme';
import ProductKategoriler from './ProductKategoriler';
import Filtre from './Filtre';
import Marka from './Marka';
import Urunler from './Urunler';
import './Products.css';
import {connect} from 'react-redux'
import axios from 'axios'
import {listProducts, resetstate} from '../../action/urunler';
import { startloading, endloading } from '../../action/loading';


const Products = (props) => {

    useEffect(async () => {

        props.dispatch(startloading())
        async function axiosApi(){
            try {
                const res = await axios.get(`https://localhost:5001/api/Urunler/UrunGetir/${props.location.pathname.substring(1).toLowerCase()}`);

                props.dispatch(listProducts({
                    products: await res.data.urunler.$values,
                    totalProduct : await res.data.toplamUrunSayisi
                }))   
            }catch(error) {
                console.warn(`Burada bir hata var: ${error}`)
            }finally {
                props.dispatch(endloading())
            }
        }
        
        axiosApi();

        return () => { 
            props.dispatch(startloading())
            props.dispatch(resetstate())           
        }

    },[])
    

    return (              
        <div className="container-fluid" style={{ backgroundColor: "rgb(243, 243, 243)", paddingBottom: "25px" }}>
            <SiteHaritasi />
            <Filtreleme />
            <div className="container">
                <div className="row">
                    <ProductKategoriler />
                    <div className="col-md-9" id="filtreIcerik">
                        <Filtre pathname={props.location.pathname.substring(1).toLowerCase()}/>
                        <Marka />
                        <Urunler pathname={props.location.pathname.substring(1).toLowerCase()} />                                 
                    </div>
                </div>
            </div> 
        </div>     
        )
}

export default connect()(Products)