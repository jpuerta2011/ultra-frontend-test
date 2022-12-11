import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product, defaultImage } from 'src/app/state/products/products.model';

@Component({
  selector: 'app-basket-product',
  templateUrl: './basket-product.component.html',
  styleUrls: ['./basket-product.component.scss']
})
export class BasketProductComponent implements OnInit {

  @Input() product: Product = {};
  @Output() remove = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  loadDefaultImage(e: any): void {
    e.target.src = defaultImage;
  }

  removeProduct() {
    this.remove.emit(this.product);
    console.log("Removed");
  }
}
