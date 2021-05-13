import { NgModule } from '@angular/core';
import {ButtonDirective} from "./basics";
import {InputDirective} from './form';
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    ButtonDirective,
    InputDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonDirective,
    InputDirective
  ]
})
export class NgHalfmoonModule { }
