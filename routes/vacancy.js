// Load Module Dependencies
var express   =   require('express');

var vacancy = require('../controllers/vacancy');

// Create a Router
var router = express.Router();

/**
 * @apiDescription This Endpoint is allow to create Vacancy
 * @api {post} /vacancies  Create Vacancy
 * @apiName CreateVacancy
 * @apiGroup Vacancy
 *
 *
 * @apiParam {String} code Vacancy Code
 * @apiParam {String} position Positions for vacancy
 * @apiParam {String} description Vacancy Description 
 * @apiParam {String} job_category Vacancy Job Category
 * @apiParam {String} exprience Exprience
 * @apiParam {String} qualification Qualification
 * @apiParam {Date}   due_date Vacancy Due Date
 * @apiParam {Number} [salary] Users Country
 * @apiParam {Number} [number_required] Number_required for Position
 * @apiParam {String} [contact] Contact 
 * @apiParam {String} [mobile]  Mobile 
 * @apiParam {String} lebel Level Like Diploma,Degree or Msc.
 * 
 * @apiParamExample Request Exmaple
 *   {
        "code":      "code112232",
        "position":     "position1",
        "description": "descrption1",
        "job_category": "jobcategory1",
        "exprience":   "exprience1",
        "qualifications":"qualification1",
        "due_date":  "duedate",
        "salary":        "salary1",
        "number_required":"12",
        "contact":       "0930015100",
        "mobile":     "mobile1",
        "email":       "email",
        "level":        "level1"
	
  }
 * }
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *   {
        "_id": "58e1327663fed368a02a7f49",
        "code": "code112232",
        "position": "position1",
        "description": "descrption1",
        "exprience": "exprience1",
        "qualifications": "qualification1",
        "status": "status1",
        "due_date": "duedate",
        "salary": "salary1",
        "number_required": "12",
        "contact": "0930015100",
        "mobile": "mobile1",
        "email": "email",
        "level": "level1",
        "job_category": []
    }
 */

router.post('/', vacancy.createVacancy);
/**
 * @apiDescription This Endpoint is allow to get all vacancy collections.
 * @api {get} /vacancies  Get all Vacancy
 * @apiName GetVacancies
 * @apiGroup Vacancy
 *
 *
 * @apiParam {String} id vacancy Id
 *
 * * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
        "_id": "58e1327663fed368a02a7f49",
        "code": "code112232",
        "position": "position1",
        "description": "descrption1",
        "exprience": "exprience1",
        "qualifications": "qualification1",
        "status": "status1",
        "due_date": "duedate",
        "salary": "salary1",
        "number_required": "12",
        "contact": "0930015100",
        "mobile": "mobile1",
        "email": "email",
        "level": "level1",
        "job_category": []
    }
    {
        "_id": "58e1327663fed368a02a7f49",
        "code": "code112232",
        "position": "position1",
        "description": "descrption1",
        "exprience": "exprience1",
        "qualifications": "qualification1",
        "status": "status1",
        "due_date": "duedate",
        "salary": "salary1",
        "number_required": "12",
        "contact": "0930015100",
        "mobile": "mobile1",
        "email": "email",
        "level": "level1",
        "job_category": []
    }
 */
router.get('/', vacancy.getVacancies);
/**
 * @apiDescription This Endpoint is allow to Get Vacancy Collection by Pagination. Use parameters to query with pagination :- page=<RESULTS_PAGE> and 
 * per_page=<RESULTS_PER_PAGE>.
 * @api {get} /vacancies/paginate?page=<RESULTS_PAGE>&per_page=<RESULTS_PER_PAGE> Vacancy Collection by Pagination
 * @apiName GetVacancyByPagination
 * @apiGroup Vacancy
 * @apiSuccess {String} code Vacancy Code
 * @apiSuccess {String} position Positions for vacancy
 * @apiSuccess {String} description Vacancy Description 
 * @apiSuccess {String} job_category Vacancy Job Category
 * @apiSuccess {String} exprience Exprience
 * @apiSuccess {String} qualification Qualification
 * @apiSuccess {Date}   due_date Vacancy Due Date
 * @apiSuccess {Number} [salary] Users Country
 * @apiSuccess {Number} [number_required] Number_required for Position
 * @apiSuccess {String} [contact] Contact 
 * @apiSuccess {String} [mobile]  Mobile 
 * @apiSuccess {String} level Level Like Diploma,Degree or Msc.
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "_id": "58e1327663fed368a02a7f49",
        "code": "code112232",
        "position": "position1",
        "description": "descrption1",
        "exprience": "exprience1",
        "qualifications": "qualification1",
        "status": "status1",
        "due_date": "duedate",
        "salary": "salary1",
        "number_required": "12",
        "contact": "0930015100",
        "mobile": "mobile1",
        "email": "email",
        "level": "level1",
        "job_category": []
    }
 */
router.get('/paginate',vacancy.getVacancysByPagination)
router.get('/search',vacancy.search)

router.param('id', vacancy.validate)
/**
 * @apiDescription This endpoint is allow to Get Specfic Vacancy Collection.
 * @api {get} /vacancies/:id  Get Specfic Vacancy
 * @apiName GetVacancy
 * @apiGroup Vacancy
 *
 *
 * @apiParam {String} id vacancy id
 *
 * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
        "_id": "58e1327663fed368a02a7f49",
        "code": "code112232",
        "position": "position1",
        "description": "descrption1",
        "exprience": "exprience1",
        "qualifications": "qualification1",
        "status": "status1",
        "due_date": "duedate",
        "salary": "salary1",
        "number_required": "12",
        "contact": "0930015100",
        "mobile": "mobile1",
        "email": "email",
        "level": "level1",
        "job_category": []
    }
 */
router.get('/:id', vacancy.getVacancy);

/**
 * @apiDescription This Endpoint is allow to update Vacancy Information.
 * @api {put} /vacancies/:id  Update Specfic Vacancy
 * @apiName UpdateVacancy
 * @apiGroup Vacancy
 * @apiParamExample Request Exmaple
 *   {
        "code":      "code112232",
        "position":     "position1",
        "description": "descrption1",
        "job_category": "jobcategory1",
        "exprience":   "exprience1",
        "qualifications":"qualification1",
        "due_date":  "duedate",
        "salary":        "salary1",
        "number_required":"12",
        "contact":       "0930015100",
        "mobile":     "mobile1",
        "email":       "email",
        "level":        "level1"
	
  }
 * @apiParam {Object} Data Update Data
 *
 * * @apiSuccessExample {json} Success-Response:
 *   HTTP/1.1 200 OK
 *   {
        "_id": "58e1327663fed368a02a7f49",
        "code": "code112232",
        "position": "position1",
        "description": "descrption1",
        "exprience": "exprience1",
        "qualifications": "qualification1",
        "status": "status1",
        "due_date": "duedate",
        "salary": "salary1",
        "number_required": "12",
        "contact": "0930015100",
        "mobile": "mobile1",
        "email": "email",
        "level": "level1",
        "job_category": []
    } 
 */

router.put('/:id', vacancy.updateVacancy);

// DELETE /vacancies/:id
router.delete('/:id', vacancy.noop);
// Export Router
module.exports = router;


