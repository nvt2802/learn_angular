import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./product";


@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getListProduct(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/products/list?page=0&searchname=&sortBy=');
  }
  getProduct(id:number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/products/detail/'+id.toString());
  }
  getQuantity(): Observable<number> {
    const userName = 'tantan';
    return this.http.get<number>('http://localhost:8080/api/order/get-quantity-cart?userName='+userName);
  }
}
