import { NgModule } from '@angular/core';
import {ButtonDirective, DarkModeService} from "./basics";
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
  providers: [
    DarkModeService
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
