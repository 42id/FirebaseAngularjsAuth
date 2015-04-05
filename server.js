/**
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    routes = require('./routes'),
    api = require('./routes/api');

var app = express();

// Configuration

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public_stage_3'));
});


// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.configure('production', function () {
    app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);


http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});