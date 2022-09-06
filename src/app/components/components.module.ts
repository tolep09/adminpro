import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { NgChartsModule } from 'ng2-charts';

import { IncreaserComponent } from './increaser/increaser.component';
import { DonutComponent } from './donut/donut.component';


@NgModule({
  declarations: [
    IncreaserComponent,
    DonutComponent
  ],
  exports: [
    IncreaserComponent, DonutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ]
})
export class ComponentsModule { }
