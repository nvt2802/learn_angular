import {Product} from "../models/product.model";
import {Cart} from "../models/cart.model";


export interface CartState {
  items: Cart[];
  // currentItem: Cart;
  quantity: number;
  status: 'idle' | 'loading' | 'error';
  error?: string;
}
