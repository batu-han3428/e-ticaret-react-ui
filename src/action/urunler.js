export const addProduct = ({title='', description='', dateAdded=0}) => ({
    type:"ADD_PRODUCT",
    urun:{
        title:title,
        description:description,
        dateAdded:dateAdded
    }
})


export const removeProduct = ({ id}) =>({
    type:"REMOVE_PRODUCT",
    id: id
})


export const editProduct = (id, updates)=>({
    type:"EDIT_PRODUCT",
    id,
    updates
})

export const listProducts = (products) => ({
    type: "LİST_PRODUCTS",
    products:products
})