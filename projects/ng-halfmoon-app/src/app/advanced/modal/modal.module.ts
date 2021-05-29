import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './modal.component';
import {BasicModalComponent} from './basic-modal/basic-modal.component';
import {DismissModalComponent} from './dismiss-modal/dismiss-modal.component';
import {DataInputModalComponent} from './data-input-modal/data-input-modal.component';
import {DataOutputModalComponent} from './data-output-modal/data-output-modal.component';
import {RouterModule, Routes} from '@angular/router';
import {DocHelperModule} from '../../doc-helper/doc-helper.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgHalfmoonModule} from 'ng-halfmoon';

const routes: Routes = [{path: '', component: ModalComponent}];

@NgModule({
  declarations: [
    ModalComponent,
    BasicModalComponent,
    DismissModalComponent,
    DataInputModalComponent,
    DataOutputModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgHalfmoonModule,
    ReactiveFormsModule,
    DocHelperModule
  ]
})
export class ModalModule {}
