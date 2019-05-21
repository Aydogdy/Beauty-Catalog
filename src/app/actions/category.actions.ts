import { Action } from '@ngrx/store';

export const GET_CATEGORIES = '[CATEGORY] Get category';

export class GetCategories implements Action {
  readonly type = GET_CATEGORIES;

  constructor() { }
}

export type CategoryActions = GetCategories;
