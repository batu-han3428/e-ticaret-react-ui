/* eslint-disable import/no-anonymous-default-export */
import {createStore, combineReducers} from 'redux'
import urunReducer from '../reducers/urunler'
import loaderReducer from '../reducers/loader';
import paginationReducer from '../reducers/pagination';
import urunDetayReducer from '../reducers/urunDetay';
import orderByReducer from '../reducers/orderBy';
import subCategoriesReducer from '../reducers/subCategories';

export default () => {
    const store = createStore(combineReducers({
        urunBilgileri:urunReducer,
        loader:loaderReducer,
        pagination:paginationReducer,
        urunDetaylari:urunDetayReducer,
        siralamaBilgisi:orderByReducer,
        subCategories:subCategoriesReducer
    }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}