import axios from 'axios';
import React, { useEffect } from 'react';
import { endloading, startloading } from '../../action/loading';
import SiteHaritasi from './SiteHaritasi';
import TeknikOzellikler from './TeknikOzellikler';
import UrunIcerik from './UrunIcerik';
import {connect} from 'react-redux';
import { listProduct, resetstate } from '../../action/urunDetay';


const ProductDetails = (props) => {

    useEffect(async () => {

        props.dispatch(startloading()) 
        async function axiosApi(){
            try {
                const res = await axios.get(`https://localhost:5001/api/Urunler/UrunDetayGetir/${Number(props.match.params.id)}`);
  
                props.dispatch(listProduct(
                    await res.data
                ))  
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
        
    }, []);

    return ( 
        
                
            <div className="container-fluid" style={{ backgroundColor: 'rgb(243, 243, 243)', paddingBottom: '25px' }}>
                        <SiteHaritasi />
                        <UrunIcerik />
                        <TeknikOzellikler />                
            </div>
           
        
        
        )
}

export default connect()(ProductDetails);