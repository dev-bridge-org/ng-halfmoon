import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertComponent} from './alert.component';
import {NgHalfmoonModule} from 'ng-halfmoon';
import {DocHelperModule} from '../../doc-helper/doc-helper.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{path: '', component: AlertComponent}];

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DocHelperModule,
    NgHalfmoonModule
  ]
})
export class AlertModule {}
