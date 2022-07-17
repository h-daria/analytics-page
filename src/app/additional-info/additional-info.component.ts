import { Component, Input, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from "ng2-google-charts";
import { CryptocurrencyService } from '../cryptocurrency.service';
import { BitcoinOverview } from '../models/bitcoin-overview';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.css']
})
export class AdditionalInfoComponent implements OnInit {
  public bitcoinOverview: BitcoinOverview[] = [];
  public stackedColumnChart: GoogleChartInterface = {
    chartType: "ColumnChart",
    dataTable: [
      ["Monthly profit", "Negative profit", { role: "annotation" }, "Positive profit"],
      ["Sep", -25, "", 0], ["Oct", 0, "", 20],
      ["Nov", 0, "", 48], ["Dec", 0, "", 25],
      ["Jan 2022", -40, "", 0], ["Feb", 0, "", 15],
      ["Mar", 0, "", 20], ["Apr", -25, "", 0],
      ["May", -15, "", 0], ["June", -20, "", 0],
      ["July", 0, "", 10], ["Aug", 0, "", 20],
    ],
    options: {
      width: 600,
      height: 150,
      legend: { position: "top", maxLines: 3 },
      bar: { groupWidth: "75%" },
      isStacked: true,
      colors: ['red', 'green']
    }
  };
  constructor(private cryptocurrencyService: CryptocurrencyService) { }

  ngOnInit(): void {
    this.getBitcoinOverview();
  }

  getBitcoinOverview(): void {
    this.cryptocurrencyService.getBitcoinOverview()
    .subscribe((data) => {
        this.bitcoinOverview = (data as {bitcoinOverview: BitcoinOverview[]}).bitcoinOverview;
      console.log('from subsc', this.bitcoinOverview);
      }
    );
}
}
