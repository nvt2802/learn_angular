export interface Cart {
  id: any;
  quantity: number;
  user: {
    id: number;
    name: string;
  };
  product: {
    id: number;
    name: string;
  }
}
