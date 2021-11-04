/* eslint-disable import/no-anonymous-default-export */
import {createStore, combineReducers} from 'redux'
import urunReducer from '../reducers/urunler'
import kategoriReducer from '../reducers/kategoriler'


export default () => {
    const store = createStore(combineReducers({
        urunler:urunReducer,
        kategori:kategoriReducer
    }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}