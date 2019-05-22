import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { select, NgRedux } from '@angular-redux/store';
import { Router } from '@angular/router';

import { SET_ACTIVE_CATEGORY } from '../../../actions/product.actions';
import { ICategory } from '../../../models/category';
import { AppState } from '../../../app.state';
import { SET_PRODUCTS } from 'src/app/actions/category.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  categories: Observable<ICategory[]>;

  @select('categories') readonly categories$: Observable<ICategory[]>;

  constructor(private ngRedux: NgRedux<AppState>,
              private router: Router) {}

  ngOnInit() {
      const active = this.ngRedux.getState().activeCategory;
      if (active['views'] !== null) {
        this.ngRedux.dispatch({type: SET_PRODUCTS, payload: this.ngRedux.getState().activeCategory});
        this.ngRedux.dispatch({type: SET_ACTIVE_CATEGORY, payload: {id: '', name: '', views: null, products: []}});
      }
  }

  goToProductPage(category: ICategory) {
    this.router.navigate(['/products']);
    this.setActiveCategory(category);
  }

  setActiveCategory(category: ICategory) {
    this.ngRedux.dispatch({type: SET_ACTIVE_CATEGORY, payload: category});
  }
}
