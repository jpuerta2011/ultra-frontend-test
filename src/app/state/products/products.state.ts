import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddProducts, RemoveProducts } from "./products.actions";
import { ProductsStateModel } from "./products.model";

@State({
  name: 'products',
  defaults: {
    products: []
  }
})
export class ProductsState {
  @Selector()
  static getProducts(state: ProductsStateModel) {
    return state.products;
  }

  @Action(AddProducts)
  add({ getState, patchState }: StateContext<ProductsStateModel>, { products }: AddProducts) {
    patchState({
      products: getState().products.concat(products)
    });
  }

  @Action(RemoveProducts)
  remove({ getState, patchState }: StateContext<ProductsStateModel>, { ids }: RemoveProducts) {
    patchState({
      products: getState().products.filter(p => ids.indexOf(p.id ?? 0) === -1)
    });
  }
}