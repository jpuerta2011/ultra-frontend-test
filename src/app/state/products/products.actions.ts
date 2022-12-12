import { Product } from "./products.model";

export class AddProducts {
  static readonly type = '[PRODUCTS] Add';
  constructor(public products: Product[]) { }
}

export class RemoveProducts {
  static readonly type = '[PRODUCTS] Remove';
  constructor(public ids: number[]) { }
}