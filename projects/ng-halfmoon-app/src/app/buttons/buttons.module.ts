import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonsComponent} from "./buttons.component";
import {RouterModule, Routes} from "@angular/router";
import {NgHalfmoonModule} from "ng-halfmoon";
import {DocHelperModule} from "../doc-helper/doc-helper.module";

const routes: Routes = [
  {path: '', component: ButtonsComponent}
];

@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DocHelperModule,
    NgHalfmoonModule
  ]
})
export class ButtonsModule { }
