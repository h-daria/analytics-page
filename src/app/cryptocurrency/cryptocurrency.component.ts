import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.css']
})
export class CryptocurrencyComponent implements OnInit {
public dropdownOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(e: any) {
    this.dropdownOpened = e as boolean;
  }
}
