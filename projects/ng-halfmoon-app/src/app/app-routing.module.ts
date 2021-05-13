import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ButtonsComponent} from "./buttons/buttons.component";
import {InputComponent} from "./input/input.component";

const routes: Routes = [
  {path: 'buttons', component: ButtonsComponent},
  {path: 'input', component: InputComponent},
  {path: '**', redirectTo: 'buttons'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
