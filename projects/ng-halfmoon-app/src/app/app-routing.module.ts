import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ButtonsComponent} from "./buttons/buttons.component";
import {InputComponent} from "./input/input.component";
import {SelectComponent} from "./select/select.component";
import {FormComponent} from "./form/form.component";

const routes: Routes = [
  {path: 'buttons', component: ButtonsComponent},
  {path: 'input', component: InputComponent},
  {path: 'select', component: SelectComponent},
  {path: 'form', component: FormComponent},
  {path: '**', redirectTo: 'buttons'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
