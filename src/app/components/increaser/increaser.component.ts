import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: [
  ]
})
export class IncreaserComponent implements OnInit {
  @Input('valor') public progress: number;
  @Input() public btnClass: string;
  @Output() changeProgress: EventEmitter<number>;

  constructor() { 
    this.progress = 1;
    this.btnClass = 'btn btn-primary';
    this.changeProgress = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public changeValue(value: number): void {
    this.progress += value;
    
    if (this.progress > 100) {
      this.progress = 100;
    } else if (this.progress < 0) {
      this.progress = 0;
    }

    this.changeProgress.emit(this.progress);
  }

  public onChange(newVal: number): void {
    if (newVal < 0) {
      this.progress = 0;
    } else if (newVal > 100) {
      this.progress = 100;
    } else {
      this.progress = newVal;
    }
    this.changeProgress.emit(this.progress);
  }

}
