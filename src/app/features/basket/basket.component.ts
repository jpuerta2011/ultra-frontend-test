import { Component, OnInit } from '@angular/core';
import { basketProducts, defaultImage, Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  productsList = basketProducts;

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveProduct(product: Product) {
    const index = this.productsList.indexOf(product);
    this.productsList.splice(index, 1);
  }
}
