import { ICategory } from './models/category';

export interface AppState {
  readonly categories: ICategory[];
}
