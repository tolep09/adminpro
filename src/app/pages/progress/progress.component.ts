import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css'
  ]
})
export class ProgressComponent implements OnInit {
  public progress: number;
  public progress2: number;
  
  constructor() {
    this.progress = 10;
    this.progress2 = 15;
  }

  ngOnInit(): void {
  }

  public getProgress(): string {
    return `${this.progress}%`;
  }

  public getProgress2(): string {
    return `${this.progress2}%`;
  }

}
