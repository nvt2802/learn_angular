import {CartState} from "./cart.state";
import * as CartActions from './cart.actions';

const initialState: CartState = {
  items: [],
  // currentItem: null,
  quantity: 0,
  status: 'idle',
  error: '',
};

export function cartReducer(state: CartState = initialState,action: CartActions.CartActions): CartState{
  console.log("da vao reducer");
  console.log(action.type)
  switch (action.type) {
    // case CartActions.GET_QUANTITY_CART:
    //   console.log("da vao reducer get quantity");
    //
    //   return {...state, status: 'loading'};
    case CartActions.GET_CART:
      console.log("da vao reducer get cart");
      return {...state, status: 'loading'};
    case CartActions.GET_CART_SUCCESS:
      console.log("da vao reducer get cart success");
      let items = action.carts;
      return {...state, status: 'idle',items, error: ''};
    default:
      console.log("da vao reducer default");

      return state;
  }
}
