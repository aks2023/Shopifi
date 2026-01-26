const { addProductToCartRef, getProductsRef, getCartItemsRef, placeOrderRef } = require('../');
const { DataConnect, CallerSdkTypeEnum } = require('@angular/fire/data-connect');
const { injectDataConnectQuery, injectDataConnectMutation } = require('@tanstack-query-firebase/angular/data-connect');
const { inject, EnvironmentInjector } = require('@angular/core');

exports.injectAddProductToCart = function injectAddProductToCart(args, injector) {
  return injectDataConnectMutation(addProductToCartRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectGetProducts = function injectGetProducts(options, injector) {
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

exports.injectGetCartItems = function injectGetCartItems(options, injector) {
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

exports.injectPlaceOrder = function injectPlaceOrder(args, injector) {
  return injectDataConnectMutation(placeOrderRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

