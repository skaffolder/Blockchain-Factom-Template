import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientEditComponent } from './patient-edit.component';
import { PatientEditRoutingModule } from './patient-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PatientEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PatientEditComponent
  ]
})
export class PatientEditModule { }
