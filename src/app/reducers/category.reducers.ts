import { ICategory } from '../models/category';
import { CategoryActions, GET_CATEGORIES } from '../actions/category.actions';

export default function categoryReducer(
  state: ICategory[] = [],
  action: CategoryActions) {

  console.log('GET CATEGORY:', action.type);
  switch (action.type) {
      case GET_CATEGORIES:
        return {...state};

      default:
          return state;
  }
}