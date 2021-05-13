import { NgModule } from '@angular/core';
import {ButtonDirective} from "./basics";
import {InputDirective, SelectDirective} from './form';
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    ButtonDirective,
    InputDirective,
    SelectDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonDirective,
    InputDirective,
    SelectDirective
  ]
})
export class NgHalfmoonModule { }
