import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { AppState } from '../../app.state';
import { IProduct } from 'src/app/models/product';
import { CREATE_PRODUCT } from 'src/app/actions/product.actions';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  customers: Observable<IProduct[]>;

  @select('productReducer') readonly products$: Observable<IProduct[]>;

  constructor(private ngRedux: NgRedux<AppState>) {
  }

  ngOnInit() {
  }

  saveProduct(product: IProduct) {
    this.ngRedux.dispatch({type: CREATE_PRODUCT, payload: product});
  }

}
