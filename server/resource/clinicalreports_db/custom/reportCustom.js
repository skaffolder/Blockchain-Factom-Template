
const app = require('../../../app.js');
const db_clinicalreports_db = require('../../../db/clinicalreports_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB report
 * 
	{
		date: {
			type: 'Date'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		_doctor: {
			type: Schema.ObjectId,
			ref : "report"
		},
		_patient: {
			type: Schema.ObjectId,
			ref : "report"
		},
		
	}
 * 
 * 
 * 
 * Custom APIs
 *
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS


