import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ROUTES} from './app.routes';
import {AppComponent} from './app.component';
import {MainPageComponent} from './presentation/pages/main-page/main-page.component';
import {UserListComponent} from './presentation/shared/components/user-list/user-list.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { MessageListComponent } from './presentation/shared/components/message-list/message-list.component';
import { MessageInputComponent } from './presentation/shared/components/message-input/message-input.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UserListComponent,
    MessageListComponent,
    MessageInputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {
}
