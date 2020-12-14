const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const flash = require("connect-flash");
const hbs = require("hbs");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const SpotifyWebApi = require("spotify-web-api-node");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// spotify setup

// const spotifyApi = new SpotifyWebApi({
//   clientId: process.env.CLIENT_ID,
//   clientSecret: process.env.CLIENT_SECRET
// });

// spotifyApi
// .clientCredentialsGrant()
// .then(data => spotifyApi.setAccessToken(data.body['access_token']))
// .catch(error => console.log('Something went wrong when retrieving an access token', error));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// MIDDLEWARES

// if (dev_mode === true) {
// @@ -55,5 +67,12 @@ if (dev_mode === true) {
// app.use(require("./middlewares/exposeLoginStatus"));
// app.use(require("./middlewares/exposeFlashMessage"));

// app.use("/", indexRouter);

//Define Routers
//const memoriesRouter = require("./routes/memories");
//const spotifyRouter = require("./routes/spotify");
//const usersRouter = require("./routes/users");

module.exports = app;
