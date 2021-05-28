import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeCollapseComponent } from './code-collapse/code-collapse.component';
import { SampleWrapperComponent } from './sample-wrapper/sample-wrapper.component';



@NgModule({
  declarations: [
    CodeCollapseComponent,
    SampleWrapperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CodeCollapseComponent,
    SampleWrapperComponent
  ]
})
export class DocHelperModule { }
