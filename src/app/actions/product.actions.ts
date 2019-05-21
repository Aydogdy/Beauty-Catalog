import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from '../app.state';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models/product';

export const GET_CATEGORIES = '[CATEGORY] Get category';
export const ADD_PRODUCT = '[PRODUCT] Add product';
export const REMOVE_PRODUCT = '[PRODUCT] Remove product';

@Injectable()
export class UsersActions {
  static GET_CATEGORIES = '[CATEGORY] Get category';
  static ADD_PRODUCT = '[PRODUCT] Add product';
  static REMOVE_PRODUCT = '[PRODUCT] Remove product';

  API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private store: Store<AppState>, private http: HttpClient) {}

  getCategories() {
    // this.http.get(`${this.API_URL}/categories`).subscribe(res => {
    this.store.dispatch({
      type: UsersActions.GET_CATEGORIES
      // payload: { res }
    });
    // });
  }

  add(product: IProduct): void {
    this.http.post(`${this.API_URL}/products/`, product).subscribe(res => {
      this.store.dispatch({
        type: UsersActions.ADD_PRODUCT,
        payload: { res }
      });
    });
  }

  deleteProduct(id: string): void {
    this.http.delete(`${this.API_URL}/products/${id}`).subscribe(res => {
      this.store.dispatch({
        type: UsersActions.REMOVE_PRODUCT,
        payload: { id }
      });
    });
  }
}
