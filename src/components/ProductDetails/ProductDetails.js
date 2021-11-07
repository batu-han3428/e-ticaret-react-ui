import axios from 'axios';
import React, { useEffect } from 'react';
import { endloading, startloading } from '../../action/loading';
import SiteHaritasi from './SiteHaritasi';
import TeknikOzellikler from './TeknikOzellikler';
import UrunIcerik from './UrunIcerik';
import {connect} from 'react-redux';
import { listProduct, resetstate } from '../../action/urunDetay';
import Loader from '../Loader/Loader';

const ProductDetails = (props) => {

    useEffect(async () => {
        
        props.dispatch(startloading()) 
        await axios.get(`https://localhost:5001/api/Urunler/UrunDetayGetir/${Number(props.match.params.id)}`,).then(res => {

            props.dispatch(listProduct(
                res.data
            ))         
           
        }).finally(() => {
            props.dispatch(endloading()) 
        });
        

        return () => {
            props.dispatch(resetstate())   
            props.dispatch(startloading())       
        }

        
    }, []);

    return ( <>
        {props.loading===true?
            
                <Loader/>:
                
            <div className="container-fluid" style={{ backgroundColor: 'rgb(243, 243, 243)', paddingBottom: '25px' }}>
                
                        <SiteHaritasi />
                        <UrunIcerik />
                        <TeknikOzellikler />
                   
                
            </div>
           
        }
        </>
        )
}

const mapStateToProps = (state) =>{  
    return {
        loading:state.loader    
    }
}

export default connect(mapStateToProps)(ProductDetails);