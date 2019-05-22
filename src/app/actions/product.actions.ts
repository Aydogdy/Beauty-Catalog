import { IProduct } from '../models/product';
import { Action } from '@ngrx/store';
import { ICategory } from '../models/category';

export const CREATE_PRODUCT = '[PRODUCT] CREATE product';
export const DELETE_PRODUCT = '[PRODUCT] Delete product';
export const SET_ACTIVE_CATEGORY = '[CATEGORY] Set active category';

export class SetActiveCategory implements Action {
  readonly type = SET_ACTIVE_CATEGORY;

  constructor(public payload: ICategory) { }
}

export class CreateProduct implements Action {
  readonly type = CREATE_PRODUCT;

  constructor(public payload: IProduct) { }
}

export class DeleteProduct implements Action {
  readonly type = DELETE_PRODUCT;

  constructor(public id: string) { }
}

export type ProductActions = SetActiveCategory | CreateProduct | DeleteProduct;
