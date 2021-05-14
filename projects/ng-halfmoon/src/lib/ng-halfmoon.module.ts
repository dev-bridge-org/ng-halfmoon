import { NgModule } from '@angular/core';
import {ButtonDirective} from "./basics";
import {FormGroupComponent, HintComponent, InputDirective, SelectDirective} from './form';
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    ButtonDirective,
    InputDirective,
    SelectDirective,
    FormGroupComponent,
    HintComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonDirective,
    InputDirective,
    SelectDirective,
    FormGroupComponent,
    HintComponent
  ]
})
export class NgHalfmoonModule { }
