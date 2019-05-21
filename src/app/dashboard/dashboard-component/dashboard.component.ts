import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/category';
import { select } from '@ngrx/store';
import { UsersActions } from 'src/app/actions/product.actions';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @select('categories') public categories$: Observable<any>;

  constructor(public actions: UsersActions) {
    actions.getCategories();
  }

  ngOnInit() {}
}
