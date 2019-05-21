import { IProduct } from '../models/product';
import { Actions, CREATE_PRODUCT, DELETE_PRODUCT } from '../actions/product.actions';


export default function productReducer(
  state: IProduct[] = [],
  action: Actions) {

  switch (action.type) {
      case CREATE_PRODUCT:
        console.log(action.payload);
        return [...state, action.payload];

      case DELETE_PRODUCT:
          return state.filter(({ id }) => id !== action.id);

      default:
          return state;
  }
}