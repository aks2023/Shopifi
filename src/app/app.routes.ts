import { Routes } from '@angular/router';
import { PostLoginComponent } from './feature-module/shared/post-login/post-login.component';
import { APP_ROUTES } from './utils/app-routes';
import { PreLoginComponent } from './feature-module/shared/pre-login/pre-login.component';

export const routes: Routes = [
  {
    path: '',
    component: PreLoginComponent,
    children: [
      {
        path: APP_ROUTES.LOGIN,
        loadChildren: () =>
          import('./feature-module/login/login-routing.module')
            .then(m => m.LoginRoutingModule)
      },
      {
        path: APP_ROUTES.SIGNUPSHELL,
        loadChildren: () =>
          import('./feature-module/signup/signup-routing.module')
            .then(m => m.SignupRoutingModule)
      }
    ]
  },
  {
    path: '',
    component: PostLoginComponent,

    children: [
      {
        path: APP_ROUTES.CARTSHELL,
        loadChildren: () =>
          import('./feature-module/cart/cart-routing.module')
            .then(m => m.CartRoutingModule)
      },
      {
        path: APP_ROUTES.CHECKOUTSHELL,
        loadChildren: () =>
          import('./feature-module/checkout/checkout-routing.module')
            .then(m => m.CheckoutRoutingModule)
      },
      {
        path: APP_ROUTES.PRODUCTSHELL,
        loadChildren: () =>
          import('./feature-module/product/product-routing.module')
            .then(m => m.ProductRoutingModule)
      },
      {
        path: APP_ROUTES.PROFILESHELL,
        loadChildren: () =>
          import('./feature-module/profile/profile-routing.module')
            .then(m => m.ProfileRoutingModule)
      }
    ]
  }
];
