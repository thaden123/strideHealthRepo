var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('patientData/jjData', { title: 'Patient Data | JJ' });
});

module.exports = router;

