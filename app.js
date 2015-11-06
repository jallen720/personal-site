var loadEnvironment = require('./utils/loadEnvironment');

loadEnvironment();

var express       = require('express'),
    path          = require('path'),
    favicon       = require('serve-favicon'),
    logger        = require('morgan'),
    cookieParser  = require('cookie-parser'),
    bodyParser    = require('body-parser'),
    mongoose      = require('mongoose'),
    Admin         = require('./models/Admin'),
    Post          = require('./models/Post'),
    Edit          = require('./models/Edit'),
    PortfolioItem = require('./models/PortfolioItem'),
    index         = require('./routes/index'),
    mongoConnect  = require('./utils/mongoConnect');

var app = express();

mongoConnect(mongoose);

// view engine setup
app.set('views', 'views');
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Static resources.
app.use('/app', express.static('public/app'));
app.use('/lib', express.static('bower_components'));
app.use('/res/css', express.static('public/css'));
app.use('/res/images', express.static('public/images'));

app.use(index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res) {
  console.log(err);
});

module.exports = app;
