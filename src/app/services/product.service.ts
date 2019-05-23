import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { HttpClient } from '@angular/common/http';

import { GET_CATEGORIES } from '../actions/category.actions';
import { AppState } from '../app.state';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private ngRedux: NgRedux<AppState>,
              private http: HttpClient) {
    this.getCategories();
  }

  getCategories() {
    this.http.get('assets/data.json')
              .subscribe((data: any) => {
                this.ngRedux.dispatch({ type: GET_CATEGORIES, payload: data.categories });
              });
  }

}
