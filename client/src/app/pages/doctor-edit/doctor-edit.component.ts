// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { DoctorService } from '../../services/doctor.service';
import { ReportService } from '../../services/report.service';
// Import Models
import { Doctor } from '../../domain/clinicalreports_db/doctor';
import { Report } from '../../domain/clinicalreports_db/report';

// START - USED SERVICES
/**
* doctorService.create
*	@description CRUD ACTION create
*
* reportService.findBy_doctor
*	@description CRUD ACTION findBy_doctor
*	@param Objectid key Id della risorsa _doctor da cercare
*
* doctorService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* doctorService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Doctor
 */
@Component({
    selector: 'app-doctor-edit',
    templateUrl: 'doctor-edit.component.html',
    styleUrls: ['doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {
    item: Doctor;
    list_doctor: Doctor[];
    externalReport: Report[];
    model: Doctor;
    formValid: Boolean;

    constructor(
    private doctorService: DoctorService,
    private reportService: ReportService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Doctor();
        this.externalReport = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.doctorService.get(id).subscribe(item => this.item = item);
                this.reportService.findBy_doctor(id).subscribe(list => this.externalReport = list);
            }
            // Get relations
        });
    }


    /**
     * Save Doctor
     *
     * @param {boolean} formValid Form validity check
     * @param Doctor item Doctor to save
     */
    save(formValid: boolean, item: Doctor): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.doctorService.update(item).subscribe(data => this.goBack());
            } else {
                this.doctorService.create(item).subscribe(data => this.goBack());
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



