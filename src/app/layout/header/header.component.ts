import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, Observable, startWith } from 'rxjs';
import { StateService } from 'src/app/services/state.service';
import { WalletService } from 'src/app/services/wallet.service';
import { SetWalletAmount } from 'src/app/state/wallet/wallet.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  constructor(
    public stateService: StateService,
    private readonly store: Store
  ) {
    
  }

  ngOnInit(): void {
  }
}
