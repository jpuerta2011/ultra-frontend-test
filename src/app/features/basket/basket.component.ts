import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/state/products/products.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  productsList: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveProduct(product: Product) {
    const index = this.productsList.indexOf(product);
    this.productsList.splice(index, 1);
  }
}
