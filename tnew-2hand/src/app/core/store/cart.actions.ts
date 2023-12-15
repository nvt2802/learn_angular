import {ActionType, createAction, props} from "@ngrx/store";
import {Cart} from "../models/cart.model";



export const GET_QUANTITY_CART= '@Post/GetQuantityCart';
export const GET_QUANTITY_CART_SUCCESS= '@Post/GetQuantityCartSuccess';
export const GET_CART_SUCCESS= '@Post/GetQuantityCartSuccess';
export const GET_QUANTITY_CART_FAILED= '@Post/GetQuantityCartFailed';
export const GET_CART_FAILED= '@Post/GetCartFailed';
export const GET_CART= '@Post/GetCart';


export const getQuantityCart = createAction(GET_QUANTITY_CART);
export const getCart = createAction(GET_CART);
export const getQuantityCartSuccess = createAction(GET_QUANTITY_CART_SUCCESS,props<{ quantity: number }>());
export const getCartSuccess = createAction(GET_CART_SUCCESS,props<{ carts: Cart[] }>());
export const getQuantityCartFailed = createAction(GET_QUANTITY_CART_FAILED,props<{ error?: string }>());
export const getCartFailed = createAction(GET_CART_FAILED,props<{ error?: string }>());

  export type CartActions =
  // | ActionType<typeof getQuantityCart>
  // | ActionType<typeof getQuantityCartSuccess>
  | ActionType<typeof getCartSuccess>
  // | ActionType<typeof getQuantityCartFailed>
  | ActionType<typeof getCartFailed>
  | ActionType<typeof getCart>
  ;
