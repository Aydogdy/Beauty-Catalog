import { Injectable } from '@angular/core';
import { GET_CATEGORIES } from '../actions/category.actions';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../app.state';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private ngRedux: NgRedux<AppState>, private http: HttpClient) {
    this.getCategories();
  }

  getCategories() {
    this.http.get('assets/data.json')
              .subscribe((data: any) => {
                this.ngRedux.dispatch({ type: GET_CATEGORIES, payload: data.categories });
              });
  }

}
