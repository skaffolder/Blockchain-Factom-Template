import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { DoctorService } from '../../services/doctor.service';
// Import Models
import { Doctor } from '../../domain/clinicalreports_db/doctor';

// START - USED SERVICES
/**
* doctorService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* doctorService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Doctor
 * @class DoctorListComponent
 */
@Component({
    selector: 'app-doctor-list',
    templateUrl: './doctor-list.component.html',
    styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
    list: Doctor[];
    search: any = {};
    idSelected: string;
    constructor(
        private doctorService: DoctorService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.doctorService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Doctor to remove
     *
     * @param {string} id Id of the Doctor to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Doctor
     */
    deleteItem() {
        this.doctorService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
