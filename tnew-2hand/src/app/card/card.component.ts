import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";
import {Observable} from "rxjs";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() product:any = {};

}
