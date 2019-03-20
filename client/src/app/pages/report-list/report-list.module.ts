import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportListComponent } from './report-list.component';
import { ReportListRoutingModule } from './report-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ReportListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ReportListComponent
  ]
})
export class ReportListModule { }
