const subCategoriesState = [];


const subCategoriesReducer = (state = subCategoriesState, action) => {
    switch (action.type) {      
        case "LİST_SUBCATEGORİES":                
            return[
                ...state,
                ...action.subcategories.subcategories
            ]
        case "RESET_STATE":
            return state = []
        default:
            return state;
    }
};

export default subCategoriesReducer