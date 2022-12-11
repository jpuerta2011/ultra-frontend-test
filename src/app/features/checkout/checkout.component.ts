import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { FormValidation } from 'src/app/common/form-validation';
import { StateService } from 'src/app/services/state.service';
import { CleanBasket } from 'src/app/state/basket/basket.actions';
import { RemoveProducts } from 'src/app/state/products/products.actions';
import { AddPurchase } from 'src/app/state/purchases/purchases.actions';
import { DecreaseWalletAmount } from 'src/app/state/wallet/wallet.actions';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent extends FormValidation implements OnInit {

  showSuccessPurchase = false;

  constructor(
    private readonly store: Store,
    public stateService: StateService
  ) {
    super();
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.invalid) {
      return;
    }
    const productIds = this.stateService.basketProducts.map(bp => bp.id ?? 0);
    const totalPrice = this.stateService.basketProductsTotalPrice;
    this.store.dispatch(new RemoveProducts(productIds));
    this.store.dispatch(new CleanBasket());
    this.store.dispatch(new AddPurchase({
      ...this.formValues,
      totalAmount: totalPrice,
      productIds: productIds
    }));
    this.store.dispatch(new DecreaseWalletAmount(totalPrice));
    this.showSuccessPurchase = true;
  }
}
