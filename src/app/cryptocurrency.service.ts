import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CryptocurrencyService {

  constructor(private http: HttpClient) {}

  getCryptocurrencies() {
    return this.http.get('../assets/cryptocurrencies.json')
  }

  getCryptoCategories() {
    return this.http.get('../assets/cryptoCategories.json')
  }

  getBitcoinOverview() {
    return this.http.get('../assets/bitcoin-overview.json')
  }

}
