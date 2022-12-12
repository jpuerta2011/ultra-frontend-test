import { Purchase } from "./purchases.model";

export class AddPurchase {
  static readonly type = '[PURCHASE] Add';
  constructor(public purchase: Purchase) { }
}