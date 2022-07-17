import { Component, OnInit } from '@angular/core';
import { CryptocurrencyService } from '../cryptocurrency.service';
import { CryptoCategory } from '../models/crypto-category';
import { Cryptocurrency } from '../models/cryptocurrency';

@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.css']
})
export class CryptocurrencyComponent implements OnInit {
  public dropdownOpened: boolean = false;
  public cryptocurrencies: Cryptocurrency[] = [];
  public constantCryptocurrencies: Cryptocurrency[] = [];
  public cryptoCategories: CryptoCategory[] = [];
  selectedCryptocurrency: Cryptocurrency | null = null;
  
  constructor(private cryptocurrencyService: CryptocurrencyService) { }

  ngOnInit(): void {
    this.getCryptocurrencies();
    this.getCryptoCategories();

    let search = document.getElementById('search-input');
    search?.addEventListener('input', (event) => {
      this.cryptocurrencies = this.constantCryptocurrencies.filter(item => `${item.name.toUpperCase()} ${item.abbreviation.toUpperCase()}`
      .includes((<HTMLInputElement>event.target).value.toUpperCase()))
      console.log((<HTMLInputElement>event.target).value)
    })
  }

  getCryptocurrencies(): void {
    this.cryptocurrencyService.getCryptocurrencies()
    .subscribe((data) => {
        this.cryptocurrencies = (data as {cryptocurrencies: Cryptocurrency[]}).cryptocurrencies;
        this.constantCryptocurrencies = (data as {cryptocurrencies: Cryptocurrency[]}).cryptocurrencies;
      }
    );
  }

  getCryptoCategories() {
    this.cryptocurrencyService.getCryptoCategories()
    .subscribe((data) => {
      this.cryptoCategories = (data as {cryptoCategories: CryptoCategory[]}).cryptoCategories;
      console.log('from subsc', this.cryptoCategories);
    }
    );
  }

  toggle(e: any) {
    this.dropdownOpened = e as boolean;
  }

}
