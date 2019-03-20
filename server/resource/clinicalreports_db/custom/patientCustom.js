
const app = require('../../../app.js');
const db_clinicalreports_db = require('../../../db/clinicalreports_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
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
 * 
 * 
 * Custom APIs
 *
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS


