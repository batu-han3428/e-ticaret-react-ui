import React, { useEffect } from 'react'

const UrunFotografItem = (props) => {

    useEffect(() => {
        if(props.index){
            document.getElementById('A0').classList.add('active');
        }
    }, [])
    return (
    <>
        <div id={`A${props.index}`} className="carousel-item">
            <div id="kartlarFotoAlan" data-bs-target={`#F${props.index}`} data-bs-toggle="modal">
                <img id="kartlarFoto" src={require(`${props.detayFotograf}`).default} alt={props.detayFotograf}/>                    
            </div>
            <div className="modal fade" id={`F${props.index}`}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <button style={{ marginLeft: "auto" }} className="btn-close" data-bs-dismiss="modal"></button>
                        <div className="modal-body">
                            <img className="card-img-top kartlarFoto" src={require(`${props.detayFotograf}`).default} alt={props.id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>  
    )
}

export default UrunFotografItem
