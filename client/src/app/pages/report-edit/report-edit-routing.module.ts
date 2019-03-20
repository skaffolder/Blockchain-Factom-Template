import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportEditComponent } from './report-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ReportEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportEditRoutingModule { }
