import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, startWith, switchMap } from 'rxjs';
import { Product } from '../state/products/products.model';
import { Purchase } from '../state/purchases/purchases.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private readonly store: Store) { }

  get products$() {
    return this.store.select<Product[]>(s => s.products.products);
  }

  get basketProducts$() {
    return this.store.select<Product[]>(s => s.basket.products);
  }

  get basketProducts() {
    return this.store.selectSnapshot<Product[]>(s => s.basket.products);
  }

  get wallet$() {
    return this.store.select<number>(s => s.wallet.totalAmout)
  }

  get basketProductsCount$() {
    return this.basketProducts$.pipe(
      startWith([]),
      map(p => p.length)
    );
  }

  get basketProductsTotalPrice$() {
    return this.basketProducts$.pipe(
      map(list => {
        if(!list || list.length === 0){
          return 0;
        }
        return list.map(l => l.price).reduce((summary, current) => summary += current)
      })
    );
  }

  get basketProductsTotalPrice() {
    return this.basketProducts.map(
      bp => bp.price
    ).reduce((summary, current) => summary += current);
  }

  get purchasesAmount$() {
    return this.store.select<Purchase[]>(state => state.purchases.purchases)
      .pipe(
        startWith([]),
        map(purchases => {          
          if(!purchases || purchases.length === 0){
            return 0;
          }
          console.log(purchases);
          return purchases.map(p => p.totalAmount)
            .reduce((summary, current) => summary += current)
        })
      )
  }
}
