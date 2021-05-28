import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ButtonsComponent} from "./buttons/buttons.component";
import {InputComponent} from "./input/input.component";
import {SelectComponent} from "./select/select.component";
import {FormComponent} from "./form/form.component";
import {DarkModeToggleComponent} from "./dark-mode-toggle/dark-mode-toggle.component";
import {AlertComponent} from './advanced/alert/alert.component';
import {ModalComponent} from "./modal/modal.component";

const routes: Routes = [
  {path: 'buttons', component: ButtonsComponent},
  {path: 'input', component: InputComponent},
  {path: 'select', component: SelectComponent},
  {path: 'form', component: FormComponent},
  {path: 'darkMode', component: DarkModeToggleComponent},
  {path: 'alerts', component: AlertComponent},
  {path: 'modals', loadChildren: () => import('./modal/modal.module').then(m => m.ModalModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
