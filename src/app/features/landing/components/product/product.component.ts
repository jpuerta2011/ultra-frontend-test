import { Component, Input, OnInit } from '@angular/core';
import { Product, defaultImage } from 'src/app/state/products/products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {};

  constructor() { }

  ngOnInit(): void {
  }

  loadDefaultImage(e: any): void {
    e.target.src = defaultImage;
  }
}
