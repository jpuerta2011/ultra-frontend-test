import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/models/product.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  productsList = products;

  constructor() { }

  ngOnInit(): void {
  }

}
