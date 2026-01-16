const express = require('express');
const EmployeController = require('../controller/employe-controller');
const AttendenceController = require('../controller/attendence')
const router = express.Router();
router.get('/Employerdetails', EmployeController.GetEmploye);
router.post('/Employerdetails/delete', EmployeController.DeleteEmploye);
router.put('/Employerdetails', EmployeController.PutEmploye);
router.post('/Employerdetails', EmployeController.PostEmploye);
router.post("/attendence", AttendenceController.Postattendence);
router.get("/attendence", AttendenceController.Getattendence);

module.exports = router;
