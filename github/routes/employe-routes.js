const express = require('express');
const EmployeController = require('../controller/employe-controller');
const router = express.Router();
router.get('/Employerdetails', EmployeController.GetEmploye);
router.post('/Employerdetails/delete', EmployeController.DeleteEmploye);
router.put('/Employerdetails', EmployeController.PutEmploye);
router.post('/Employerdetails', EmployeController.PostEmploye);
module.exports = router;