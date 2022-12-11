import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product, defaultImage } from 'src/app/state/products/products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = { price: 0};
  @Output() add = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  loadDefaultImage(e: any): void {
    e.target.src = defaultImage;
  }

  onClick() {
    this.add.emit(this.product);
  }
}
