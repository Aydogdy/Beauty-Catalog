import { IProduct } from '../models/product';
import { ProductActions, CREATE_PRODUCT, DELETE_PRODUCT } from '../actions/product.actions';


export default function productReducer(
  state: IProduct[] = [],
  action: ProductActions) {

  switch (action.type) {
      case CREATE_PRODUCT:
        return [...state, action.payload];

      case DELETE_PRODUCT:
          return state.filter(({ id }) => id !== action.id);

      default:
          return state;
  }
}