import { addProductToCartRef, getProductsRef, getCartItemsRef, placeOrderRef } from '../../';
import { DataConnect, CallerSdkTypeEnum } from '@angular/fire/data-connect';
import { injectDataConnectQuery, injectDataConnectMutation } from '@tanstack-query-firebase/angular/data-connect';
import { inject, EnvironmentInjector } from '@angular/core';
export function injectAddProductToCart(args, injector) {
  return injectDataConnectMutation(addProductToCartRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectGetProducts(options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  getProductsRef(dc),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectGetCartItems(options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  getCartItemsRef(dc),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectPlaceOrder(args, injector) {
  return injectDataConnectMutation(placeOrderRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

