var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('cathyProfile', { title: 'Cathy Smalls' });
});

module.exports = router;

