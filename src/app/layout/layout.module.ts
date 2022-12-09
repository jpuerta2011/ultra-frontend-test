import { NgModule } from '@angular/core';
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
  exports: DECLARATIONS
})
export class LayoutModule { }
