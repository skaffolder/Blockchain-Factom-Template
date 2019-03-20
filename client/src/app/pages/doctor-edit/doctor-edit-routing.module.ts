import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorEditComponent } from './doctor-edit.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorEditRoutingModule { }
