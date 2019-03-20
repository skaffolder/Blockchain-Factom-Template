import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorListComponent } from './doctor-list.component';
import { DoctorListRoutingModule } from './doctor-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    DoctorListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    DoctorListComponent
  ]
})
export class DoctorListModule { }
