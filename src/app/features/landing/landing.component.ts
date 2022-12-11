import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { AddProducts } from 'src/app/state/products/products.actions';
import { Product } from 'src/app/state/products/products.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public products$: Observable<Product[]>;

  constructor(
    private service: ProductsService,
    private readonly store: Store
  ) {
    this.products$ = this.store.select(s => s.products.products);
    service.getProducts()
      .subscribe(p => {
        console.log(p);
        this.store.dispatch(new AddProducts(p));
      });
  }

  ngOnInit(): void {
  }

}
