var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('tomData', { title: 'Patient Data | Tom' });
});

module.exports = router;

