import { AddProductToCartData, AddProductToCartVariables, GetProductsData, GetCartItemsData, PlaceOrderData } from '../';
import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise} from '@angular/fire/data-connect';
import { CreateQueryResult, CreateMutationResult} from '@tanstack/angular-query-experimental';
import { CreateDataConnectQueryResult, CreateDataConnectQueryOptions, CreateDataConnectMutationResult, DataConnectMutationOptionsUndefinedMutationFn } from '@tanstack-query-firebase/angular/data-connect';
import { FirebaseError } from 'firebase/app';
import { Injector } from '@angular/core';

type AddProductToCartOptions = DataConnectMutationOptionsUndefinedMutationFn<AddProductToCartData, FirebaseError, AddProductToCartVariables>;
export function injectAddProductToCart(options?: AddProductToCartOptions, injector?: Injector): CreateDataConnectMutationResult<AddProductToCartData, AddProductToCartVariables, AddProductToCartVariables>;

export type GetProductsOptions = () => Omit<CreateDataConnectQueryOptions<GetProductsData, undefined>, 'queryFn'>;
export function injectGetProducts(options?: GetProductsOptions, injector?: Injector): CreateDataConnectQueryResult<GetProductsData, undefined>;

export type GetCartItemsOptions = () => Omit<CreateDataConnectQueryOptions<GetCartItemsData, undefined>, 'queryFn'>;
export function injectGetCartItems(options?: GetCartItemsOptions, injector?: Injector): CreateDataConnectQueryResult<GetCartItemsData, undefined>;

type PlaceOrderOptions = DataConnectMutationOptionsUndefinedMutationFn<PlaceOrderData, FirebaseError, undefined>;
export function injectPlaceOrder(options?: PlaceOrderOptions, injector?: Injector): CreateDataConnectMutationResult<PlaceOrderData, undefined, >;
