import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list.component';
import { PatientListRoutingModule } from './patient-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PatientListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PatientListComponent
  ]
})
export class PatientListModule { }
