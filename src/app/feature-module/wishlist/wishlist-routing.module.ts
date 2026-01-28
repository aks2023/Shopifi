import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistShellComponent } from './wishlist-shell/wishlist-shell.component';

const routes: Routes = [
    {
    path: '',
    component: WishlistShellComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishlistRoutingModule {}
