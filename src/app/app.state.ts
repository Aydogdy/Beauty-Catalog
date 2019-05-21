import { IProduct } from './models/product';
import { ICategory } from './models/category';

export interface AppState {
  categories?: ICategory[];
  products?: IProduct[];
}
