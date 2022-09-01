import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: [ './notfound.component.css'
  ]
})
export class NotfoundComponent implements OnInit {
  public year: number;

  constructor() {
    this.year = new Date().getFullYear();
   }

  ngOnInit(): void {
  }

}
