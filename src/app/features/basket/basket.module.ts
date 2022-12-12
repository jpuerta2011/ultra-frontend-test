import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { BasketProductComponent } from './components/basket-product/basket-product.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: BasketComponent,
  },
];

@NgModule({
  declarations: [
    BasketComponent,
    BasketProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent,
        children: routes,
      },
    ]),
    LayoutModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ]
})
export class BasketModule { }
