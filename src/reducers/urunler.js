const urunState = [];


const urunReducer = (state = urunState, action) => {
    switch (action.type) {      
        case "LİST_PRODUCTS":     
            if(state.length === 0){
                return{
                    urunler: state.concat(action.products),
                    toplamUrunSayisi:action.totalProduct
                }
            }else{
                return{
                    urunler: state.urunler.concat(action.products),
                    toplamUrunSayisi:action.totalProduct
                }
            }
            
        case "RESET_STATE":
            return state = [];
        default:
            return state;
    }
};

export default urunReducer