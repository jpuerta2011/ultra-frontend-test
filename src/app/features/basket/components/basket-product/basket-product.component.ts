import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { defaultImage, Product } from 'src/app/models/product.model';

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
