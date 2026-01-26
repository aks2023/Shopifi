import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddProductToCartData {
  cartItem_insert: CartItem_Key;
}

export interface AddProductToCartVariables {
  productId: UUIDString;
  quantity: number;
}

export interface CartItem_Key {
  id: UUIDString;
  __typename?: 'CartItem_Key';
}

export interface GetCartItemsData {
  cartItems: ({
    id: UUIDString;
    product: {
      id: UUIDString;
      name: string;
      description: string;
      price: number;
      imageUrl?: string | null;
    } & Product_Key;
      quantity: number;
  } & CartItem_Key)[];
}

export interface GetProductsData {
  products: ({
    id: UUIDString;
    name: string;
    description: string;
    price: number;
    imageUrl?: string | null;
  } & Product_Key)[];
}

export interface OrderItem_Key {
  id: UUIDString;
  __typename?: 'OrderItem_Key';
}

export interface Order_Key {
  id: UUIDString;
  __typename?: 'Order_Key';
}

export interface PlaceOrderData {
  order_insert: Order_Key;
}

export interface Product_Key {
  id: UUIDString;
  __typename?: 'Product_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface AddProductToCartRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddProductToCartVariables): MutationRef<AddProductToCartData, AddProductToCartVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddProductToCartVariables): MutationRef<AddProductToCartData, AddProductToCartVariables>;
  operationName: string;
}
export const addProductToCartRef: AddProductToCartRef;

export function addProductToCart(vars: AddProductToCartVariables): MutationPromise<AddProductToCartData, AddProductToCartVariables>;
export function addProductToCart(dc: DataConnect, vars: AddProductToCartVariables): MutationPromise<AddProductToCartData, AddProductToCartVariables>;

interface GetProductsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetProductsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetProductsData, undefined>;
  operationName: string;
}
export const getProductsRef: GetProductsRef;

export function getProducts(): QueryPromise<GetProductsData, undefined>;
export function getProducts(dc: DataConnect): QueryPromise<GetProductsData, undefined>;

interface GetCartItemsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetCartItemsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetCartItemsData, undefined>;
  operationName: string;
}
export const getCartItemsRef: GetCartItemsRef;

export function getCartItems(): QueryPromise<GetCartItemsData, undefined>;
export function getCartItems(dc: DataConnect): QueryPromise<GetCartItemsData, undefined>;

interface PlaceOrderRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<PlaceOrderData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<PlaceOrderData, undefined>;
  operationName: string;
}
export const placeOrderRef: PlaceOrderRef;

export function placeOrder(): MutationPromise<PlaceOrderData, undefined>;
export function placeOrder(dc: DataConnect): MutationPromise<PlaceOrderData, undefined>;

