import { Component, Input, OnInit } from '@angular/core';
import { defaultImage, Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    imgSrc: '',
    name: '',
    price: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  loadDefaultImage(e: any): void {
    e.target.src = defaultImage;
  }
}
