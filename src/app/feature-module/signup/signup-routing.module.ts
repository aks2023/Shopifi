import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupShellComponent } from './signup-shell/signup-shell.component';

const routes: Routes = [
      {
      path: '',
      component: SignupShellComponent,
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
