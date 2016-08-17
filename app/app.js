var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http)

// Static files
app.use(express.static(__dirname + '/public'));

//Socket.io stuff
//Create custom namespace
var channel1 = io.of('/channel1');
channel1.on('connction', function(socket) {
    console.log('Someone connected to /channel1');
    console.log(socket);
    socket.on('disconnect', function(){
        console.log('Some one left channel1')
    });
});

var channel2 = io.of('/channel2');
channel2.on('connection', function(socket) {
    console.log('Someone connected to /channel2');
    console.log(socket);
    socket.on('disconnect', function(){
        console.log('Some one left channel2')
    });
});


app.get('/channel', function(req, res){
    res.send('Post some messages with Postman')
});

app.post('/channel1', function(req, res){
    console.log('Emitting on /channel1');
    channel1.emit('/channel1','Hi channel1');
    res.send('Sent message to /channel1')

});

app.post('/all', function(req, res){
        console.log('Emitting on /all');
    io.emit('/all', 'For all eyes to see!!!');
    res.send('Sent message to /all')
});

app.post('/channel2', function(req, res){
    console.log('Emitting on /channel2');
    channel2.emit('/channel2', 'Hi channel2');
    res.send('Sent message to /channel2')
});

app.post('/both', function(req, res){
    console.log('Emitting on both /channel1 and /channel2');
    channel1.emit('/channel1', 'Hi channel1');
    channel2.emit('/channel2', 'Hi channel2');
    res.send('Sent message to both channels');
});

http.listen(3000, function(){
    console.log('Listening on *:3000');
});


//EO Socket.io stuff

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


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
