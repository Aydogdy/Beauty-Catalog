import { IProduct } from './product';
import { ICategory } from './category';

export interface AppState {
  products: IProduct[] | [];
  categories: ICategory | [];
}

export const initialState: AppState = {
    products: [],
    categories: []
}