import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ReportService } from '../../services/report.service';
// Import Models
import { Report } from '../../domain/clinicalreports_db/report';

// START - USED SERVICES
/**
* reportService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* reportService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Report
 * @class ReportListComponent
 */
@Component({
    selector: 'app-report-list',
    templateUrl: './report-list.component.html',
    styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
    list: Report[];
    search: any = {};
    idSelected: string;
    constructor(
        private reportService: ReportService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.reportService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Report to remove
     *
     * @param {string} id Id of the Report to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Report
     */
    deleteItem() {
        this.reportService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
