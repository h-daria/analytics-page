import { Component, Input, OnInit } from '@angular/core';
import { Cryptocurrency } from '../models/cryptocurrency';

@Component({
  selector: 'app-cryptocurrency-info',
  templateUrl: './cryptocurrency-info.component.html',
  styleUrls: ['./cryptocurrency-info.component.css']
})
export class CryptocurrencyInfoComponent implements OnInit {
  @Input() selectedCryptocurrency: Cryptocurrency | null = null;
  public bitcoinOverviewOpened: boolean = false;
  constructor() { }

  ngOnInit(): void {
    if( this.selectedCryptocurrency != undefined) {
        this.selectedCryptocurrency.date = new Date();
    }
  }

}
