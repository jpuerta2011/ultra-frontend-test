import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddProductToBasket, CleanBasket, RemoveProductFromBasket } from "./basket.actions";
import { BasketStateModel } from "./basket.model";

@State({
  name: 'basket',
  defaults: {
    products: []
  }
})
export class BasketState {
  @Selector()
  static getProducts(state: BasketStateModel) {
    return state.products;
  }

  @Action(AddProductToBasket)
  add({ getState, patchState }: StateContext<BasketStateModel>, { product }: AddProductToBasket) {
    patchState({
      products: [...getState().products, product]
    });
  }

  @Action(RemoveProductFromBasket)
  remove({ getState, patchState }: StateContext<BasketStateModel>, { id }: RemoveProductFromBasket) {
    patchState({
      products: getState().products.filter(p => p.id !== id)
    });
  }

  @Action(CleanBasket)
  clean({ setState }: StateContext<BasketStateModel>, { }: CleanBasket) {
    setState({
      products: []
    })
  }
}