import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddPurchase } from "./purchases.actions";
import { PurchasesStateModel } from "./purchases.model";

@State({
  name: 'purchases',
  defaults: {
    purchases: []
  }
})
export class PurchasesState {
  @Selector()
  static getPurchases(state: PurchasesStateModel) {
    return state.purchases;
  }

  @Action(AddPurchase)
  add({ getState, patchState }: StateContext<PurchasesStateModel>, { purchase }: AddPurchase) {
    patchState({
      purchases: [...getState().purchases, purchase]
    });
  }
}