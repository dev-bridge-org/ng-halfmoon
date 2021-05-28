import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeCollapseComponent } from './code-collapse/code-collapse.component';



@NgModule({
  declarations: [
    CodeCollapseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CodeCollapseComponent
  ]
})
export class DocHelperModule { }
