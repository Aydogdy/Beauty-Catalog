import { Component } from '@angular/core';
import { AppState } from './app.state';
import { Store } from '@ngrx/store';
import { reducer } from './reducers/product.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beautyCatalog';

  constructor(
    private devTool: DevToolsExtension,
    private store: Store<AppState>
  ) {}
}
