import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgHalfmoonModule} from "ng-halfmoon";
import { InputComponent } from './input/input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SelectComponent } from './select/select.component';
import { FormComponent } from './form/form.component';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { AlertComponent } from './advanced/alert/alert.component';
import {DocHelperModule} from "./doc-helper/doc-helper.module";

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SelectComponent,
    FormComponent,
    DarkModeToggleComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgHalfmoonModule,
    ReactiveFormsModule,
    DocHelperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
