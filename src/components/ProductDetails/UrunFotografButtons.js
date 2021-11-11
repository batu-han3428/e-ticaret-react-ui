import React, { useEffect } from 'react'
import $ from 'jquery'

const UrunFotografButtons = (props) => {
   
    useEffect(() => {
        buttonBorder();
    }, [])

    function buttonBorder(){
        $("#tuslar button:eq(0)").css({

            "border": "1px solid rgb(255, 123, 0)"
    
        });
    
    
        $("#tuslar button").click(function () {
    
            $("#tuslar button").css({
    
                "border": "0"
    
            });
    
            $(this).css({
    
                "border": "1px solid rgb(255, 123, 0)"
    
            });
    
        });
    }

    return (
    <>
        <button className="tusButonlari" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to={props.index}>
            <div id="kartlarFotoAlanTus">
                <img id="kartlarFotoTus" src={require(`${props.detayFotograf}`).default} alt={props.detayFotograf}/>
            </div>
        </button>       
    </>
    )
}

export default UrunFotografButtons
