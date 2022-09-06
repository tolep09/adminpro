import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {
  public labels: string[];
  public data: number[];

  constructor() {
    this.labels = ['Muebles', 'Ropa', 'Electronica'];
    this.data = [ 350, 450, 100 ];
   }

  ngOnInit(): void {
  }

}
