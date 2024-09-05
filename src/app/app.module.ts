import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ROUTES} from './app.routes';
import {AppComponent} from './app.component';
import {MainPageComponent} from './presentation/pages/main-page/main-page.component';
import {UserListComponent} from './presentation/shared/components/user-list/user-list.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {
}
