import { NgModule } from '@angular/core';

// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { provideReduxForms } from '@angular-redux/form';
import { AppState } from './app.state';
import { rootReducer } from './reducers/reducers';


@NgModule({
  imports: [NgReduxModule],
})
export class StoreModule {
  constructor(
    public store: NgRedux<AppState>,
    devTools: DevToolsExtension,
  ) {
    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    store.configureStore(
      rootReducer,
      {},
      [],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);

    provideReduxForms(store);
  }
}
