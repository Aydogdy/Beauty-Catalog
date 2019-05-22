import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/internal/Observable';

import { CREATE_PRODUCT } from '../../../actions/product.actions';
import { UPDATE_VIEWS } from '../../../actions/category.actions';
import { ICategory } from '../../../models/category';
import { IProduct } from '../../../models/product';
import { AppState } from '../../../app.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @select('activeCategory') readonly activeCategory$: Observable<ICategory>;
  categoryName: string;

  constructor(private ngRedux: NgRedux<AppState>) {}

  ngOnInit() {
    this.ngRedux.dispatch({type: UPDATE_VIEWS, payload: this.ngRedux.getState().activeCategory});
  }

  saveProduct(product: IProduct) {
    this.ngRedux.dispatch({type: CREATE_PRODUCT, payload: product});
  }

}
