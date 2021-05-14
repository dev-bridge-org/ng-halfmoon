import { NgModule } from '@angular/core';
import {ButtonDirective} from "./basics";
import {ErrorComponent, FormGroupComponent, HintComponent, InputDirective, SelectDirective} from './form';
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    ButtonDirective,
    InputDirective,
    SelectDirective,
    FormGroupComponent,
    HintComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonDirective,
    InputDirective,
    SelectDirective,
    FormGroupComponent,
    HintComponent,
    ErrorComponent
  ]
})
export class NgHalfmoonModule { }
