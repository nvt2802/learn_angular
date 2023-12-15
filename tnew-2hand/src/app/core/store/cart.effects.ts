import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as cartAction from './cart.actions';
import {catchError, map, mergeMap} from "rxjs/operators";
import {ProductService} from "../../product.service";
import {of} from "rxjs";
import {CartService} from "../service/cart.service";
import {Cart} from "../models/cart.model";

@Injectable()
export class CartEffects {

  // loadQuantity$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(cartAction.getQuantityCart),
  //     mergeMap(() =>
  //       this.productService.getQuantity()
  //         .pipe(
  //           map((quantity) => (cartAction.getQuantityCartSuccess({quantity}))),
  //           catchError(error => of(cartAction.getQuantityCartFailed({error})))
  //         )
  //     )
  //   )
  // );

  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartAction.getCart),
      mergeMap(() =>
        this.cartService.getAllCart()
          .pipe(
            map((carts:Cart[]) => cartAction.getCartSuccess({carts})),
            catchError(error => of(cartAction.getCartFailed({error})))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private cartService: CartService,
  ) {
  }
}
CartEffects
