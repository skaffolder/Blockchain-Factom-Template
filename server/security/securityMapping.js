/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */

exports.authMapping = {
    //STATIC SECURITY
    'POST - /api/changePassword$': [],
    'POST - /api/users/$': ["ADMIN"],
    'POST - /api/users/([^/])+$': ["ADMIN"],
    'GET - /api/users/$': ["ADMIN"],
    'GET - /api/users/([^/])+$': ["ADMIN"],
    'POST - /api/users/([^/])+/changePassword': ["ADMIN"],

    //YOUR SECURITY MAPPING
	'POST - /api/user/([^/])+/changePassword$' : ["ADMIN"],
	'POST - /api/user/*$' : [],
	'DELETE - /api/user/([^/])+$' : [],
	'GET - /api/user/([^/])+$' : [],
	'GET - /api/user/*$' : [],
	'POST - /api/user/([^/])+$' : [],
	'POST - /api/doctor/*$' : [],
	'DELETE - /api/doctor/([^/])+$' : [],
	'GET - /api/doctor/([^/])+$' : [],
	'GET - /api/doctor/*$' : [],
	'POST - /api/doctor/([^/])+$' : [],
	'POST - /api/patient/*$' : [],
	'DELETE - /api/patient/([^/])+$' : [],
	'GET - /api/patient/([^/])+$' : [],
	'GET - /api/patient/*$' : [],
	'POST - /api/patient/([^/])+$' : [],
	'POST - /api/report/*$' : [],
	'DELETE - /api/report/([^/])+$' : [],
	'GET - /api/report/findBy_doctor/([^/])+$' : [],
	'GET - /api/report/findBy_patient/([^/])+$' : [],
	'GET - /api/report/([^/])+$' : [],
	'GET - /api/report/*$' : [],
	'POST - /api/report/([^/])+$' : [],
	

}
