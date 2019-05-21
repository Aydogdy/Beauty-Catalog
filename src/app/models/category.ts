import { IProduct } from './product';

export interface ICategory {
  id: string;
  name: string;
  views: number;
  products: IProduct[];
}
