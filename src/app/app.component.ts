import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ProductsService } from './services/products.service';
import { WalletService } from './services/wallet.service';
import { AddProducts } from './state/products/products.actions';
import { SetWalletAmount } from './state/wallet/wallet.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ultra-frontend-test';

  constructor(
    walletService: WalletService,
    productService: ProductsService,
    private readonly store: Store
  ) {
    walletService.getWallet()
      .subscribe(w => {
        this.store.dispatch(new SetWalletAmount(w.totalAmount));
      });

    productService.getProducts()
      .subscribe(p => {
        this.store.dispatch(new AddProducts(p));
      });
  }
}
