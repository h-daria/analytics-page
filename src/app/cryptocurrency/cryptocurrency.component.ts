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
  public cryptoCategories: CryptoCategory[] = [];
  selectedCryptocurrency: Cryptocurrency | null = null;
  constructor(private cryptocurrencyService: CryptocurrencyService) { }

  ngOnInit(): void {
    this.getCryptocurrencies();
    this.getCryptoCategories();
  }

  getCryptocurrencies(): void {
    this.cryptocurrencyService.getCryptocurrencies()
    .subscribe((data) => {
        this.cryptocurrencies = (data as {cryptocurrencies: Cryptocurrency[]}).cryptocurrencies;
        console.log('from subscribe', this.cryptocurrencies);
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

  getCryptocurrencyByAbbreviation(abbrev: string) {
    let cryptocurrency = this.cryptocurrencies.find( item => item.abbreviation == abbrev);
  }

  toggle(e: any) {
    this.dropdownOpened = e as boolean;
  }

  logC(cryptocurrency: any) {
    console.log(cryptocurrency)
  }
}
