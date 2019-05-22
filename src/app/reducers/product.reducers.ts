import { ProductActions, CREATE_PRODUCT, DELETE_PRODUCT, SET_ACTIVE_CATEGORY } from '../actions/product.actions';
import { ICategory } from '../models/category';


export default function productReducer(
  state: ICategory = {id: '', name: '', views: null, products: []},
  action: ProductActions) {

  switch (action.type) {

    case SET_ACTIVE_CATEGORY:
        return action.payload;
        
      // case CREATE_PRODUCT:
      //   return {...state, action.payload};

      // case DELETE_PRODUCT:
      //     return state.filter(({ id }) => id !== action.id);

      default:
          return state;
  }
}