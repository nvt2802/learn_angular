import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: "./header.component.html",
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  quantity$: Observable<number>;
  constructor(private store: Store<{ feature_cart: number }>) {
    this.quantity$ = store.select('feature_cart');
  }
}
