import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonsComponent} from "./buttons/buttons.component";
import {NgHalfmoonModule} from "ng-halfmoon";
import { InputComponent } from './input/input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    InputComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgHalfmoonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
