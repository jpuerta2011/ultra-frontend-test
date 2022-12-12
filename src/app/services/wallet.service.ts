import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }

  getWallet() {
    return this.http.get<{ totalAmount: number }>(environment.dataEndpoints.wallet);
  }
}
