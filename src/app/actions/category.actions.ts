import { Action } from '@ngrx/store';
import { ICategory } from '../models/category';

export const GET_CATEGORIES = '[CATEGORY] Get category';
export const UPDATE_VIEWS = '[CATEGORY] Update views';

export class GetCategories implements Action {
  readonly type = GET_CATEGORIES;

  constructor() { }
}

export class UpdateViews implements Action {
  readonly type = UPDATE_VIEWS;

  constructor(public payload: ICategory) { }
}

export type CategoryActions = GetCategories | UpdateViews;
