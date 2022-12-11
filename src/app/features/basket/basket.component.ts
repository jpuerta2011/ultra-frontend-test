import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, Observable, startWith, switchMap } from 'rxjs';
import { StateService } from 'src/app/services/state.service';
import { RemoveProductFromBasket } from 'src/app/state/basket/basket.actions';
import { Product } from 'src/app/state/products/products.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {


  constructor(
    private readonly store: Store,
    public stateService: StateService
  ) { }

  ngOnInit(): void {
  }

  get notSufficientBalance$() {
    return this.stateService.basketProductsTotalPrice$.pipe(
      switchMap((totalPrice => this.stateService.wallet$.pipe(
        map(balance => totalPrice > balance)
      )))
    )
  }

  onRemoveProduct(product: Product) {
    this.store.dispatch(new RemoveProductFromBasket(product.id ?? 0));
  }
}
