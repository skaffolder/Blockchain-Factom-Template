import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportEditComponent } from './report-edit.component';
import { ReportEditRoutingModule } from './report-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ReportEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ReportEditComponent
  ]
})
export class ReportEditModule { }
