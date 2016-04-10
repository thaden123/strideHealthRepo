var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('patientData/bobData', { title: 'Patient Data | Bob' });
});

module.exports = router;

