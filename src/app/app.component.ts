import { Component } from '@angular/core';
import { createStore } from 'redux';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beautyCatalog';
  constructor(private productService: ProductService) {}
}
