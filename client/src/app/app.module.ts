import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {UsersService} from "./users.service";
import { UserComponent } from './user/user.component';
import { UserViewStatusComponent } from './user-view-status/user-view-status.component';
import { UserViewRegisteredComponent } from './user-view-registered/user-view-registered.component';
import { UserViewSubscriptionEndComponent } from './user-view-subscription-end/user-view-subscription-end.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { UserViewAdditionalInfoComponent } from './user-view-additional-info/user-view-additional-info.component';
import { UserEditorAdditionalInfoComponent } from './user-editor-additional-info/user-editor-additional-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserViewStatusComponent,
    UserViewRegisteredComponent,
    UserViewSubscriptionEndComponent,
    TooltipDirective,
    UserViewAdditionalInfoComponent,
    UserEditorAdditionalInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
