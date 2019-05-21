import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/category';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  categories: ICategory[];

  constructor(
    private store: Store<AppState>,
    private productService: ProductService
  ) {
    store.select('categories').subscribe(res => {
      this.categories = res;
      console.log(this.categories);
    });
  }

  ngOnInit() {}
}
