var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var login = require('./routes/login');
var critical = require('./routes/critical');
var upcoming = require('./routes/upcoming');
var johnProfile = require('./routes/patientProfiles/johnProfile');
var johnData = require('./routes/patientData/johnData');
var tomProfile = require('./routes/patientProfiles/tomProfile');
var tomData = require('./routes/patientData/tomData');
var jjProfile = require('./routes/patientProfiles/jjProfile');
var jjData = require('./routes/patientData/jjData');
var daveProfile = require('./routes/patientProfiles/daveProfile');
var daveData = require('./routes/patientData/daveData');
var cathyProfile = require('./routes/patientProfiles/cathyProfile');
var cathyData = require('./routes/patientData/cathyData');
var bobProfile = require('./routes/patientProfiles/bobProfile');
var bobData = require('./routes/patientData/bobData');
var patDatabase = require('./routes/patientDatabase');

var app = express();
//var mongoClient = require("mongodb").MongoClient;
//mongoClient.connect("mongodb://localhost:27017/patientList",function(err,db){
//  if(!err){
//    console.log("We are connected");
//  }
//  db.collection('test', function(err,collection){});
//});
app.use(bodyParser.json());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', login);
app.use('/index', index);
app.use('/critical', critical);
app.use('/upcoming', upcoming);
app.use('/patientProfiles/johnProfile', johnProfile);
app.use('/patientData/johnData', johnData);
app.use('/patientProfiles/tomProfile', tomProfile);
app.use('/patientData/tomData', tomData);
app.use('/patientProfiles/jjProfile', jjProfile);
app.use('/patientData/jjData', jjData);
app.use('/patientProfiles/daveProfile', daveProfile);
app.use('/patientData/daveData', daveData);
app.use('/patientProfiles/cathyProfile', cathyProfile);
app.use('/patientData/cathyData', cathyData);
app.use('/patientProfiles/bobProfile', bobProfile);
app.use('/patientData/bobData', bobData);
app.use('/patientDatabase',patDatabase);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
