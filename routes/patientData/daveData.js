var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('patientData/daveData', { title: 'Patient Data | Dave' });
});

module.exports = router;

