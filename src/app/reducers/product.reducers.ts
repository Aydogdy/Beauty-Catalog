import * as UsersActions from '../actions/product.actions';
import { IProduct } from '../models/product';
import { ICategory } from '../models/category';

const initialState: ICategory = {
  id: '',
  name: '',
  views: null,
  products: []
};

export function reducer(state: ICategory[] = [initialState], action: any) {
  switch (action.type) {
    case UsersActions.GET_CATEGORIES: {
      return [...state];
    }
    case UsersActions.ADD_PRODUCT: {
      return [...state, action.payload];
    }
    case UsersActions.REMOVE_PRODUCT: {
      const old = [...state];
      const product = action.payload;
      const filtered = old.filter(p => p.id !== product.id);
      return filtered;
    }
    default:
      return state;
  }
}
