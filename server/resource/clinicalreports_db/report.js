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
 *  TO CUSTOMIZE report.js PLEASE EDIT ../custom/reportCustom.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
const app = require('../../app.js');
const db_clinicalreports_db = require('../../db/clinicalreports_db_schema.js')
const properties = require('../../properties.js');
const handleError = require('../../security/util.js').handleError;
require('./custom/reportCustom.js');

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
 */



//CRUD METHODS


/**
 * reportService.create
 *   @description CRUD ACTION create
 *
 */
app.post(properties.api + '/report', function (req, res) {
	obj = new db_clinicalreports_db.report(req.body);
	obj.save(function (err) {
		if (err) return handleError(err, res);
		res.send(obj);
	});
});

/**
 * reportService.delete
 *   @description CRUD ACTION delete
 *   @param ObjectId id Id
 *
 */
app['delete'](properties.api + '/report/:id', function (req, res) {
	db_clinicalreports_db.report.findByIdAndRemove(req.params.id, function (err) {
		  if (err) return handleError(err, res);
		  res.send(err);
	});
});

/**
 * reportService.findBy_doctor
 *   @description CRUD ACTION findBy_doctor
 *   @param Objectid key Id della risorsa _doctor da cercare
 *
 */
app.get(properties.api + '/report/findBy_doctor/:key', function (req, res) {

	db_clinicalreports_db.report.find({ '_doctor' : req.params.key}).exec(function (err, list) {
		if (err) return handleError(err, res);
		res.send(list);
	});
	
});

/**
 * reportService.findBy_patient
 *   @description CRUD ACTION findBy_patient
 *   @param Objectid key Id della risorsa _patient da cercare
 *
 */
app.get(properties.api + '/report/findBy_patient/:key', function (req, res) {

	db_clinicalreports_db.report.find({ '_patient' : req.params.key}).exec(function (err, list) {
		if (err) return handleError(err, res);
		res.send(list);
	});
	
});

/**
 * reportService.get
 *   @description CRUD ACTION get
 *   @param ObjectId id Id 
 *
 */
app.get(properties.api + '/report/:id', function (req, res) {
	db_clinicalreports_db.report.findOne({_id:req.params.id}).exec(function (err, obj) {
		if (err) return handleError(err, res);
		res.send(obj);
	});
});

/**
 * reportService.list
 *   @description CRUD ACTION list
 *
 */
app.get(properties.api + '/report', function (req, res) {
	db_clinicalreports_db.report.find().exec(function (err, list) {
		if (err) return handleError(err, res);
		res.send(list);
	});
});

/**
 * reportService.update
 *   @description CRUD ACTION update
 *   @param ObjectId id Id
 *
 */
app.post(properties.api + '/report/:id', function (req, res) {
	db_clinicalreports_db.report.findByIdAndUpdate(req.params.id, req.body, {'new': true}, function (err, obj) {
		if (err) return handleError(err, res);
		res.send(obj);
	});
});


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */
