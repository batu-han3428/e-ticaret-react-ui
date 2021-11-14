const orderByState = "";


const orderByReducer = (state = orderByState, action) => {
    switch (action.type) {      
        case "ORDER_BY":                
            return action.orderby;
        default:
            return state;
    }
};

export default orderByReducer