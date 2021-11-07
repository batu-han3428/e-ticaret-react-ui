import  React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { startloading, endloading } from '../../action/loading';
import axios from 'axios'
import {listProducts, resetstate} from '../../action/urunler';
import {activepage} from '../../action/pagination';

const Pagination = (props) => {

    var toplamSayfa;

    useEffect(() => {
        
        if(props.urunSayisi < 40){
            toplamSayfa = Math.ceil(props.urunSayisi / 20);
        }else{
            toplamSayfa = Math.floor(props.urunSayisi / 20);
        }
        

        let li = document.querySelectorAll('.page-item a');

        if(toplamSayfa > 5){
            if(props.aktifSayfa > 3){
                let baslangic = Math.abs(2-props.aktifSayfa);
                li.forEach(li=>{
                    if(li.classList.contains('sayi')){
                        li.textContent = baslangic;
                        baslangic++;
                    }                   
                })          
            }
        }

        if(props.urunSayisi <= 20 ){            
            li.forEach(li=>{
                if(li.textContent != 1){
                    li.parentElement.classList.add('disabled')
                } 
            })
        }else{           
            li.forEach(li=>{            
                if(li.textContent == props.aktifSayfa){
                    li.parentElement.classList.add('active');
                    li.parentElement.classList.remove('disabled');
                }else{
                    li.parentElement.classList.remove('active');
                }
            })
        }

        li.forEach(li=>{
            if(li.textContent > toplamSayfa){
                li.style.cursor="no-drop";
            }
        })

    }, [])

    const sayfaCagir = (e) => {
        
       
        if(toplamSayfa < Number(e.target.textContent)){

        }else{
            props.dispatch(startloading())  
            axios.get(`https://localhost:5001/api/Urunler/UrunGetir/${props.pathname}?PageNumber=${e.target.textContent}`,).then(res => {
                props.dispatch(listProducts({
                    products: res.data.urunler,
                    totalProduct : res.data.toplamUrunSayisi
                }))         
                
                props.dispatch(activepage({
                    active:Number(e.target.textContent)
                }))
    
            }).finally(() => {
                props.dispatch(endloading())  
            });

            props.dispatch(resetstate())
            props.dispatch(startloading())
        }
                
    }

    return (
        <div className="row mt-3 border-3 border-bottom" id="paginationSatir">
            <div className="col-md-12 p-3">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link" href="/#">
                            <span>&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item active"><a className="page-link sayi" href="/#" onClick={(e)=>{e.preventDefault(); sayfaCagir(e)}} >1</a> 
                    </li>
                    <li className="page-item"><a className="page-link sayi" href="/#" onClick={(e)=>{e.preventDefault(); sayfaCagir(e)}}>2</a></li>
                    <li className="page-item"><a className="page-link sayi" href="/#" onClick={(e)=>{e.preventDefault(); sayfaCagir(e)}}>3</a></li>
                    <li className="page-item"><a className="page-link sayi" id="4" href="/#" onClick={(e)=>{e.preventDefault(); sayfaCagir(e)}}>4</a></li>
                    <li className="page-item"><a className="page-link sayi" href="/#" onClick={(e)=>{e.preventDefault(); sayfaCagir(e)}}>5</a></li>
                    <li className="page-item">
                        <a className="page-link" href="/#">
                            <span>&raquo;</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        )
}

const mapStateToProps = (state) =>{  
    return {
        urunSayisi:state.urunBilgileri.toplamUrunSayisi,
        aktifSayfa:state.pagination.active  
    }
}

export default connect(mapStateToProps)(Pagination)