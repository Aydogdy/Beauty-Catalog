import { Injectable } from '@angular/core';
import { GET_CATEGORIES } from '../actions/category.actions';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../app.state';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private ngRedux: NgRedux<AppState>) {
    this.getCatalogs();
  }


  getCatalogs() {
    this.ngRedux.dispatch({ type: GET_CATEGORIES });
  }

}
