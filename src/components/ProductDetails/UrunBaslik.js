import React from 'react';
import {connect} from 'react-redux'

const UrunBaslik = (props) => {
    
    return (
            <div className="row">
                <div className="col-md-12" id="urunBaslikSutun">
                    <span className="h4" id="urunBaslik">{props.urunDetayAd}</span>
                </div>
            </div>
        )
}

const mapStateToProps = (state) =>{  
    
    return {
        urunDetayAd:state.urunDetaylari.ad || ""
    }
}

export default connect(mapStateToProps)(UrunBaslik)