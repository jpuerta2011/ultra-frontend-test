import { Action, Selector, State, StateContext } from "@ngxs/store";
import { DecreaseWalletAmount, SetWalletAmount } from "./wallet.actions";
import { WalletStateModel } from "./wallet.model";

@State({
  name: 'wallet',
  defaults: {
    totalAmout: 0
  }
})
export class WalletState {
  @Selector()
  static getWalletAmount(state: WalletStateModel) {
    return state.totalAmout;
  }

  @Action(DecreaseWalletAmount)
  decrease({ getState, patchState }: StateContext<WalletStateModel>, { amount }: DecreaseWalletAmount) {
    console.log(`Current amount: ${getState().totalAmout}`);
    console.log(`amount: ${amount}`);
    patchState({
      totalAmout: getState().totalAmout - amount
    })
  }

  @Action(SetWalletAmount)
  set({ setState }: StateContext<WalletStateModel>, { totalAmount }: SetWalletAmount) {
    console.log(`Set amount: ${totalAmount}`);
    setState({
      totalAmout: totalAmount
    });
  }
}