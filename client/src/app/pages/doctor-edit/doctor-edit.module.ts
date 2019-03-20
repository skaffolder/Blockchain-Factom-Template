import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorEditComponent } from './doctor-edit.component';
import { DoctorEditRoutingModule } from './doctor-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    DoctorEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    DoctorEditComponent
  ]
})
export class DoctorEditModule { }
