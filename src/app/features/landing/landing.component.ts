import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { StateService } from 'src/app/services/state.service';
import { AddProductToBasket } from 'src/app/state/basket/basket.actions';
import { AddProducts } from 'src/app/state/products/products.actions';
import { Product } from 'src/app/state/products/products.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    public stateService: StateService,
    private readonly store: Store
  ) {
    
  }

  ngOnInit(): void {
  }

  onAdd(product: Product) {
    const index = this.stateService.basketProducts.findIndex(p => p.id === product.id);
    if (index != -1) {
      alert("Product was already added");
      return;
    }
    this.store.dispatch(new AddProductToBasket(product));
  }

}
