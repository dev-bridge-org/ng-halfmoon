import { NgModule } from '@angular/core';
import {ButtonDirective, DarkModeService} from "./basics";
import {ErrorComponent, HintComponent, InputContainerComponent, InputDirective, SelectDirective} from './form';
import {CommonModule} from "@angular/common";
import { SelectContainerComponent } from './form/select/select-container/select-container.component';
import {AlertComponent, ModalContainerComponent, ModalService} from './advanced';


@NgModule({
  declarations: [
    ButtonDirective,
    InputDirective,
    SelectDirective,
    HintComponent,
    ErrorComponent,
    InputContainerComponent,
    SelectContainerComponent,
    AlertComponent,
    ModalContainerComponent
  ],
  providers: [
    DarkModeService,
    ModalService
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
    AlertComponent,
    ModalContainerComponent
  ]
})
export class NgHalfmoonModule { }
