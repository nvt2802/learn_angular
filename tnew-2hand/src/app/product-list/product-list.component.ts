import { Component } from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];
  constructor(private productService:ProductService) {
  }

  ngOnInit(): void {
    this.productService.getListProduct().subscribe(res =>{
      console.log(res);
      this.products = res.content;
    });
  }
}
