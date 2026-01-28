import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersShellComponent } from './orders-shell/orders-shell.component';

const routes: Routes = [
      {
      path: '',
      component: OrdersShellComponent,
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
