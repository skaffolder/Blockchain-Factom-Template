import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientEditComponent } from './patient-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PatientEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientEditRoutingModule { }
