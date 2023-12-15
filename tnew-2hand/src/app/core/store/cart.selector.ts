import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CartState} from "./cart.state";


export const featureCart = createFeatureSelector<CartState>('feature_cart');

export const cartQuantitySelector = createSelector(featureCart, state => state);
export const cartSelector = createSelector(featureCart, state => state.items);
export const cartStatusSelector = createSelector(featureCart, state => state.status);
