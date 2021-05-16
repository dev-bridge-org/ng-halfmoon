import { NgModule } from '@angular/core';
import {ButtonDirective} from "./basics";
import {ErrorComponent, HintComponent, InputContainerComponent, InputDirective, SelectDirective} from './form';
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    ButtonDirective,
    InputDirective,
    SelectDirective,
    HintComponent,
    ErrorComponent,
    InputContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonDirective,
    InputDirective,
    SelectDirective,
    HintComponent,
    ErrorComponent,
    InputContainerComponent
  ]
})
export class NgHalfmoonModule { }
