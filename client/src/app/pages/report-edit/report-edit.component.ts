// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ReportService } from '../../services/report.service';
import { DoctorService } from '../../services/doctor.service';
import { PatientService } from '../../services/patient.service';
// Import Models
import { Report } from '../../domain/clinicalreports_db/report';
import { Doctor } from '../../domain/clinicalreports_db/doctor';
import { Patient } from '../../domain/clinicalreports_db/patient';

// START - USED SERVICES
/**
* reportService.create
*	@description CRUD ACTION create
*
* reportService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* doctorService.list
*	@description CRUD ACTION list
*
* patientService.list
*	@description CRUD ACTION list
*
* reportService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Report
 */
@Component({
    selector: 'app-report-edit',
    templateUrl: 'report-edit.component.html',
    styleUrls: ['report-edit.component.css']
})
export class ReportEditComponent implements OnInit {
    item: Report;
    list_doctor: Doctor[];
    list_patient: Patient[];
    model: Report;
    formValid: Boolean;

    constructor(
    private reportService: ReportService,
    private doctorService: DoctorService,
    private patientService: PatientService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Report();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.reportService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.doctorService.list().subscribe(list => this.list_doctor = list);
            this.patientService.list().subscribe(list => this.list_patient = list);
        });
    }


    /**
     * Save Report
     *
     * @param {boolean} formValid Form validity check
     * @param Report item Report to save
     */
    save(formValid: boolean, item: Report): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.reportService.update(item).subscribe(data => this.goBack());
            } else {
                this.reportService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



