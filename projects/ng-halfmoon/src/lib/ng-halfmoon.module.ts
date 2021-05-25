import { NgModule } from '@angular/core';
import {ButtonDirective, DarkModeService} from "./basics";
import {ErrorComponent, HintComponent, InputContainerComponent, InputDirective, SelectDirective} from './form';
import {CommonModule} from "@angular/common";
import { SelectContainerComponent } from './form/select/select-container/select-container.component';
import {AlertComponent} from './advanced';


@NgModule({
  declarations: [
    ButtonDirective,
    InputDirective,
    SelectDirective,
    HintComponent,
    ErrorComponent,
    InputContainerComponent,
    SelectContainerComponent,
    AlertComponent
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
    InputContainerComponent,
    SelectContainerComponent,
    AlertComponent
  ]
})
export class NgHalfmoonModule { }
