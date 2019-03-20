/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE patientBaseService PLEASE EDIT ../patient.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Patient } from '../../domain/clinicalreports_db/patient';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../patient.service.ts
 */

/*
 * SCHEMA DB patient
 *
	{
		name: {
			type: 'String'
		},
		surname: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		_patient: {
			type: Schema.ObjectId,
			ref : "report"
		},
	}
 *
 */
@Injectable()
export class PatientBaseService {

    contextUrl: string = environment.endpoint + '/patient';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * patientService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Patient): Observable<Patient> {
        return this.http
            .post<Patient>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * patientService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * patientService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id 
    *
    */
    get(id: string): Observable<Patient> {
        return this.http
            .get<Patient>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * patientService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Patient[]> {
        return this.http
            .get<Patient[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * patientService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Patient): Observable<Patient> {
        return this.http
            .post<Patient>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
