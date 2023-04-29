var express = require('express');
var router = express.Router();
const controller = require('../controller/employeesController')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/allemployees', controller.allEmployees)
router.post('/newemployees', controller.newEmployees)
router.get('/employee/:id', controller.employee)

module.exports = router;
