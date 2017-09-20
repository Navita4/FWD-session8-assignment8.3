import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserComponent} from './user.component';
import {UsermyuserService} from './Service/user-myuserservice';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UsermyuserService],
  bootstrap: [UserComponent]
})
export class AppModule { }
