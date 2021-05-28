import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonsComponent} from "./buttons/buttons.component";
import {NgHalfmoonModule} from "ng-halfmoon";
import { InputComponent } from './input/input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SelectComponent } from './select/select.component';
import { FormComponent } from './form/form.component';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { AlertComponent } from './advanced/alert/alert.component';
import { ModalComponent } from './modal/modal.component';
import { BasicModalComponent } from './modal/basic-modal/basic-modal.component';
import { DismissModalComponent } from './modal/dismiss-modal/dismiss-modal.component';
import { DataInputModalComponent } from './modal/data-input-modal/data-input-modal.component';
import { DataOutputModalComponent } from './modal/data-output-modal/data-output-modal.component';
import {DocHelperModule} from "./doc-helper/doc-helper.module";

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    InputComponent,
    SelectComponent,
    FormComponent,
    DarkModeToggleComponent,
    AlertComponent,
    ModalComponent,
    BasicModalComponent,
    DismissModalComponent,
    DataInputModalComponent,
    DataOutputModalComponent
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
