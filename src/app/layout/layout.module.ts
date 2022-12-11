import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

const DECLARATIONS = [
  HeaderComponent,
  LayoutComponent
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    NgbDropdownModule,
    NgbModule,
    RouterModule,
    MatIconModule
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'USD' }
  ],
  exports: DECLARATIONS
})
export class LayoutModule { }
