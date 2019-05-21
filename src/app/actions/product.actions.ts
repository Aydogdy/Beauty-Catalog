import { IProduct } from '../models/product';
import { Action } from '@ngrx/store';

export const CREATE_PRODUCT = '[PRODUCT] CREATE product';
export const DELETE_PRODUCT = '[PRODUCT] Delete product';

export class CreateProduct implements Action {
  readonly type = CREATE_PRODUCT;

  constructor(public payload: IProduct) { }
}

export class DeleteProduct implements Action {
  readonly type = DELETE_PRODUCT;

  constructor(public id: string) { }
}

export type ProductActions = CreateProduct | DeleteProduct;
