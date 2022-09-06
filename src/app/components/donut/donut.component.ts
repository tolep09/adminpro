import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent implements OnInit {
  @Input() public title: string;
  @Input() public labels: string[] =['Dato1', 'Dato2' ];
  @Input() public data: number[] = [50, 50];
  // Doughnut
  public doughnutChartLabels: string[];
  public doughnutChartData: ChartData<'doughnut'>;
  public doughnutChartType: ChartType = 'doughnut';
  
  constructor() {
    this.title = 'Agregue un titulo';
    this.doughnutChartLabels = this.labels;
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: this.data },
      ]
    };
   }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.doughnutChartLabels = this.labels;
    this.doughnutChartData={
      labels: this.doughnutChartLabels,
      datasets:[{ data: this.data}]
   
    }
  }

}
