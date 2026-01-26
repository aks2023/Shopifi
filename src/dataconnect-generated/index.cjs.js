const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'shopifi',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const addProductToCartRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddProductToCart', inputVars);
}
addProductToCartRef.operationName = 'AddProductToCart';
exports.addProductToCartRef = addProductToCartRef;

exports.addProductToCart = function addProductToCart(dcOrVars, vars) {
  return executeMutation(addProductToCartRef(dcOrVars, vars));
};

const getProductsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetProducts');
}
getProductsRef.operationName = 'GetProducts';
exports.getProductsRef = getProductsRef;

exports.getProducts = function getProducts(dc) {
  return executeQuery(getProductsRef(dc));
};

const getCartItemsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCartItems');
}
getCartItemsRef.operationName = 'GetCartItems';
exports.getCartItemsRef = getCartItemsRef;

exports.getCartItems = function getCartItems(dc) {
  return executeQuery(getCartItemsRef(dc));
};

const placeOrderRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'PlaceOrder');
}
placeOrderRef.operationName = 'PlaceOrder';
exports.placeOrderRef = placeOrderRef;

exports.placeOrder = function placeOrder(dc) {
  return executeMutation(placeOrderRef(dc));
};
