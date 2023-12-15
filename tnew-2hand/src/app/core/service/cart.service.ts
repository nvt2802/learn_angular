import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cart} from "../models/cart.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getAllCart():Observable<Cart[]>{
    console.log("da vao service")
    return this.http.get<Cart[]>('http://localhost:8080/api/order/get-all-cart?userName=tantan')
  }

}
