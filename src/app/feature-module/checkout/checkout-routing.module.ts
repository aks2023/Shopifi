import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutShellComponent } from './checkout-shell/checkout-shell.component';

const routes: Routes = [
      {
      path: '',
      component: CheckoutShellComponent,
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
