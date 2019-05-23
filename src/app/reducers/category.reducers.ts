import { ICategory } from '../models/category';
import { CategoryActions, GET_CATEGORIES, UPDATE_VIEWS, SET_PRODUCTS } from '../actions/category.actions';

export default function categoryReducer(
  state: ICategory[] = [],
  action: CategoryActions) {

  switch (action.type) {
      case GET_CATEGORIES:
        return [...action['payload']];

      case UPDATE_VIEWS:
            const ind = state.indexOf(action.payload);
            const vals = [...state];
            vals[ind].views = vals[ind].views + 1;
            return vals;
    case SET_PRODUCTS:
            const ix = state.findIndex(x => x.id === action.payload.id);
            const oldArr = [...state];
            oldArr[ix].products = action.payload.products;
            return oldArr;

      default:
          return state;
  }
}
