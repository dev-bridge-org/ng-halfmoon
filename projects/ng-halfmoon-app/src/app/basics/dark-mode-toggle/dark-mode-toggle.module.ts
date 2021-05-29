import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DarkModeToggleComponent} from './dark-mode-toggle.component';
import {RouterModule, Routes} from '@angular/router';
import {NgHalfmoonModule} from 'ng-halfmoon';
import {DocHelperModule} from '../../doc-helper/doc-helper.module';

const routes: Routes = [{path: '', component: DarkModeToggleComponent}];

@NgModule({
  declarations: [DarkModeToggleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgHalfmoonModule,
    DocHelperModule
  ]
})
export class DarkModeToggleModule {}
