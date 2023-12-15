import {AfterContentInit, Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {cartSelector, cartStatusSelector, featureCart} from "../core/store/cart.selector";
import {getCart} from "../core/store/cart.actions";
import {Observable} from "rxjs";
import {Cart} from "../core/models/cart.model";
import {vmFromLatest} from "../utils/operator.util";
import {map} from "rxjs/operators";

interface PostListVm {
  carts: Cart[];
  isLoading: boolean;
}

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit{
  // item$ = this.store.select(cartSelector);
  vm$: Observable<PostListVm> = new Observable<PostListVm>();
  carts:Cart[] = [];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
   this.store.dispatch(getCart());

    this.vm$ = vmFromLatest<PostListVm>({
      carts: this.store.pipe(select(cartSelector)),
      isLoading: this.store.pipe(select(cartStatusSelector), map(status => status === 'loading'))
    });
    this.vm$.subscribe(a => {
      this.carts=a.carts;
    });
  }

}
