// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { DoctorEditComponent} from './pages/doctor-edit/doctor-edit.component';
import { DoctorListComponent} from './pages/doctor-list/doctor-list.component';
import { PatientEditComponent} from './pages/patient-edit/patient-edit.component';
import { PatientListComponent} from './pages/patient-list/patient-list.component';
import { ReportEditComponent} from './pages/report-edit/report-edit.component';
import { ReportListComponent} from './pages/report-list/report-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'doctors/:id',  loadChildren: './pages/doctor-edit/doctor-edit.module#DoctorEditModule' , canActivate: [AuthGuard] },
    { path: 'doctors',  loadChildren: './pages/doctor-list/doctor-list.module#DoctorListModule' , canActivate: [AuthGuard] },
    { path: 'patients/:id',  loadChildren: './pages/patient-edit/patient-edit.module#PatientEditModule' , canActivate: [AuthGuard] },
    { path: 'patients',  loadChildren: './pages/patient-list/patient-list.module#PatientListModule' , canActivate: [AuthGuard] },
    { path: 'reports/:id',  loadChildren: './pages/report-edit/report-edit.module#ReportEditModule' , canActivate: [AuthGuard] },
    { path: 'reports',  loadChildren: './pages/report-list/report-list.module#ReportListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
