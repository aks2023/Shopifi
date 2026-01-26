import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'shopifi',
  location: 'us-east4'
};

export const addProductToCartRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddProductToCart', inputVars);
}
addProductToCartRef.operationName = 'AddProductToCart';

export function addProductToCart(dcOrVars, vars) {
  return executeMutation(addProductToCartRef(dcOrVars, vars));
}

export const getProductsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetProducts');
}
getProductsRef.operationName = 'GetProducts';

export function getProducts(dc) {
  return executeQuery(getProductsRef(dc));
}

export const getCartItemsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCartItems');
}
getCartItemsRef.operationName = 'GetCartItems';

export function getCartItems(dc) {
  return executeQuery(getCartItemsRef(dc));
}

export const placeOrderRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'PlaceOrder');
}
placeOrderRef.operationName = 'PlaceOrder';

export function placeOrder(dc) {
  return executeMutation(placeOrderRef(dc));
}

