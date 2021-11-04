import * as React from 'react';
import SiteHaritasi from './SiteHaritasi';
import TeknikOzellikler from './TeknikOzellikler';
import UrunIcerik from './UrunIcerik';

const ProductDetails = () => {
    return (
        <div className="container-fluid" style={{ backgroundColor: 'rgb(243, 243, 243)', paddingBottom: '25px' }}>
            <SiteHaritasi />
            <UrunIcerik />
            <TeknikOzellikler />
        </div>
        )
}

export default ProductDetails