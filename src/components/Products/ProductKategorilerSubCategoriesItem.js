import React from 'react'

const ProductKategorilerSubCategoriesItem = (props) => {
    return (
        <a href="/#" onClick={(e)=>e.preventDefault()}>{props.altKategoriler.altKategoriAdi}&nbsp;<span>(1.399)</span></a>
    )
}

export default ProductKategorilerSubCategoriesItem