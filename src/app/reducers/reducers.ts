import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import categoryReducer from './category.reducers';
import productReducer from './product.reducers';

export const rootReducer = composeReducers(
    defaultFormReducer(),
    combineReducers({
        products: categoryReducer,
        categories: productReducer,
    }));
