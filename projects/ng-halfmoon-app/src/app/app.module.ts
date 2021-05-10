import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonsComponent} from "./buttons/buttons.component";
import {NgHalfmoonModule} from "ng-halfmoon";
import { InputComponent } from './input/input.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgHalfmoonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
