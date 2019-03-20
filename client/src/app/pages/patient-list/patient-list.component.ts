import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { PatientService } from '../../services/patient.service';
// Import Models
import { Patient } from '../../domain/clinicalreports_db/patient';

// START - USED SERVICES
/**
* patientService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* patientService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Patient
 * @class PatientListComponent
 */
@Component({
    selector: 'app-patient-list',
    templateUrl: './patient-list.component.html',
    styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
    list: Patient[];
    search: any = {};
    idSelected: string;
    constructor(
        private patientService: PatientService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.patientService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Patient to remove
     *
     * @param {string} id Id of the Patient to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Patient
     */
    deleteItem() {
        this.patientService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
