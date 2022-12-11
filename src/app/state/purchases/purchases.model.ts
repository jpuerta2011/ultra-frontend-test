import { Product } from "../products/products.model";

export interface Purchase {
  name: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  email: string;
  productIds: number[];
  totalAmount: number
}

export class PurchasesStateModel {
  purchases: Purchase[] = [];
}