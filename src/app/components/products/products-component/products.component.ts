import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

import { CREATE_PRODUCT, DELETE_PRODUCT } from '../../../actions/product.actions';
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
  productForm: FormGroup;
  submitted = false;

  cardView = true;
  listView = false;

  @select('activeCategory') readonly activeCategory$: Observable<ICategory>;

  constructor(private ngRedux: NgRedux<AppState>, private fb: FormBuilder) {}

  ngOnInit() {
    this.ngRedux.dispatch({type: UPDATE_VIEWS, payload: this.ngRedux.getState().activeCategory});

    this.productForm = this.fb.group({
      name: ['', Validators.required],
      image: ['https://s.hdnux.com/photos/62/36/53/13232855/5/920x920.jpg', Validators.required],
    });
  }

  get f() { return this.productForm.controls; }

  cardViewClick() {
    console.log('CArd');
    this.cardView = true;
    this.listView = false;
  }

  listViewClick() {
    console.log('List');
    this.listView = true;
    this.cardView = false;
  }

  saveProduct(product: IProduct) {
    this.ngRedux.dispatch({type: CREATE_PRODUCT, payload: product});
  }

  onDelete(id: string) {
    this.ngRedux.dispatch({type: DELETE_PRODUCT, id: id});
  }

  onSubmit() {
    this.submitted = true;

    if (this.productForm.invalid) {
        return;
    }
    this.saveProduct({id: (new Date()).toString(), name: this.productForm.value.name, image:  this.productForm.value.image});
    this.onReset();
  }

  onReset() {
    this.productForm.reset({name: ''});
    let control: AbstractControl = null;
    this.productForm.markAsUntouched();
    Object.keys(this.productForm.controls).forEach((name) => {
      control = this.productForm.controls[name];
      control.setErrors(null);
    });
  }

}
