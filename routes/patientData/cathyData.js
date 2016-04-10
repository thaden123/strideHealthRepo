var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('patientData/cathyData', { title: 'Patient Data | Cathy' });
});

module.exports = router;

