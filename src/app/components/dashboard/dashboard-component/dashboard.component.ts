import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { select, NgRedux } from '@angular-redux/store';

import { ICategory } from '../../../models/category';
import { AppState } from '../../../app.state';
import { GET_CATEGORIES } from '../../../actions/category.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  categories: Observable<ICategory[]>;

  @select('categories') readonly categories$: Observable<ICategory[]>;

  constructor(private ngRedux: NgRedux<AppState>) {
  }

  ngOnInit() {
    this.getCatalogs();
  }

  getCatalogs() {
    this.ngRedux.dispatch({ type: GET_CATEGORIES });
  }
}
