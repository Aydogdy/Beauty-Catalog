import { ICategory } from './models/category';
import { IProduct } from './models/product';

export interface AppState {
  categories?: ICategory[];
  activeCategory?: ICategory;
}
