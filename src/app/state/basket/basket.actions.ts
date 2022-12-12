import { Product } from "../products/products.model";

export class AddProductToBasket {
  static readonly type = '[BASKET] Add';
  constructor(public product: Product) { }
}

export class RemoveProductFromBasket {
  static readonly type = '[BASKET] Remove';
  constructor(public id: number) { }
}

export class CleanBasket {
  static readonly type = '[BASKET] Clean';
  constructor() { }
}