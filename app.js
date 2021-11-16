var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bottleSchema = require("./models/bottle");

const connectionString =
  process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bottleRouter = require('./routes/bottle');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector')
var resourceRouter = require('./routes/resource')

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
async function recreateDB() {
  // Delete everything
  await bottleSchema.deleteMany();
  let instance1 = new bottleSchema({brand: "Tupperware",
    bottlesModel: "Plastic",
    Quantity: 500
  });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
  let instance2 = new bottleSchema({
    brand: "Milton",
    bottlesModel: "copper",
    Quantity: 750
  });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved")
  });
  let instance3 = new bottleSchema({
    brand: "Signoraware",
    bottlesModel: "steel",
    Quantity: 1000
  });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved")
  });
}
let reseed = true;
if (reseed) { recreateDB(); }

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bottle', bottleRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function (err, req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror: '));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});
