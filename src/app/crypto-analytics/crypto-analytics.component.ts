import { Component, Input, OnInit } from "@angular/core";
import { GoogleChartInterface, GoogleChartType } from "ng2-google-charts";

@Component({
  selector: "app-crypto-analytics",
  templateUrl: "./crypto-analytics.component.html",
  styleUrls: ["./crypto-analytics.component.css"]
})
export class CryptoAnalyticsComponent implements OnInit {
  @Input() bitcoinOverviewOpened: boolean = false;
  
  public piedata!: Object[];
  public chartLabel!: Object;
  public legend!: object;
  public pointColorMapping!: string;

  public lineChart: GoogleChartInterface = {
    chartType: "LineChart",
    dataTable: [
      ["Number", "Equity"],
      ["3/03", -10], ["1/03", -10], 
      ["4/03", -5], ["7/03", -5],
      ["9/03", 0], ["11/03", 0],
      ["13/03", 6], ["15/03", 10],
      ["17/03", 10], ["20/03", 15],
      ["22/03", 15], ["24/03", 20],
      ["27/03", 26], ["29/03", 26],
      ["32/03", 30], ["35/03", 30],
    ],
    options: {
      width: '120%',
      height: '100%',
      chartArea: { width: "85%", height: "70%" },
      curveType: "function",
      legend: { position: "none" },
      bar: { groupWidth: "75%" },
      colors: ["#299000"],
      hAxis: { minValue: -10, maxValue: 40},
      pointSize: 5,
      crosshair: { trigger: 'both', focused: { color: 'grey'} }
    }
  };
  constructor() { }

  ngOnInit(): void {
    this.piedata = [
      { name: 'Profitable deals', value: 70, text: '13466', color: "#D0ECC5" },
      { name: 'Unprofitable deals', value: 30, text: '446', color: "#FFB0B0" }    
    ]

    this.chartLabel = {
      visible: true,
      position: 'Inside',
      name: 'text'
    }

    this.legend = {
      visible: false,
    }

    this.pointColorMapping = "color";
  }



  
}
