const urunDetayState = {};


const urunDetayReducer = (state = urunDetayState, action) => {
    switch (action.type) {      
        case "LİST_PRODUCT":     
            return {
                ...action.urunDetay
            }            
        case "RESET_STATE":
            return state = {};
        default:
            return state;
    }
};

export default urunDetayReducer