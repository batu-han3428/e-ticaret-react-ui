const paginationState = {active:1};


const paginationReducer = (state = paginationState, action) => {
    switch (action.type) {      
        case "ACTİVE_PAGE":                
            return{
                active:action.active              
            } 
        default:
            return state;
    }
};

export default paginationReducer