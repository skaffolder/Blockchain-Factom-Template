/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/clinicalreports_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_clinicalreports_db_schema = [];
const db_clinicalreports_db = [];

/**
 * SCHEMA DB clinicalreports_db
 */



 /**
  * User
  */
db_clinicalreports_db_schema.User = new mongoose.Schema({
	mail: {
		type: 'String'
	},
	name: {
		type: 'String'
	},
	password: {
		type: 'String', 
		required : true
	},
	roles: [{
		type: 'String'
	}],
	surname: {
		type: 'String'
	},
	username: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * doctor
  */
db_clinicalreports_db_schema.doctor = new mongoose.Schema({
	name: {
		type: 'String'
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	_doctor: {
		type: Schema.ObjectId,
		ref : "report"
	},
	*/
});


 /**
  * patient
  */
db_clinicalreports_db_schema.patient = new mongoose.Schema({
	name: {
		type: 'String'
	},
	surname: {
		type: 'String'
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	_patient: {
		type: Schema.ObjectId,
		ref : "report"
	},
	*/
});


 /**
  * report
  */
db_clinicalreports_db_schema.report = new mongoose.Schema({
	date: {
		type: 'Date'
	},
	//RELATIONS
	_doctor: {
		type: Schema.ObjectId,
		ref : "doctor"
	},
	_patient: {
		type: Schema.ObjectId,
		ref : "patient"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});



// Import schema customization
require('./clinicalreports_db_customSchema.js');
var clinicalreports_db_model = require('./clinicalreports_db_crud.js');

// Declare mongoose model

db_clinicalreports_db.User = clinicalreports_db_model.connection.model('User', db_clinicalreports_db_schema.User );
db_clinicalreports_db.doctor = clinicalreports_db_model.connection.model('doctor', db_clinicalreports_db_schema.doctor );
db_clinicalreports_db.patient = clinicalreports_db_model.connection.model('patient', db_clinicalreports_db_schema.patient );
db_clinicalreports_db.report = clinicalreports_db_model.connection.model('report', db_clinicalreports_db_schema.report );

module.exports = db_clinicalreports_db;

// Create ADMIN user if does not exist
createUser.createUser();
