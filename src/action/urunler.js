export const listProducts = ({products, totalProduct}) => ({
    type: "LİST_PRODUCTS",
    products:products,
    totalProduct:totalProduct,
})

export const resetstate = () => ({
    type: "RESET_STATE"  
})