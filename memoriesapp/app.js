require("dotenv").config();
require("./config/mongo");

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
const memoriesRouter = require("./routes/memories");

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
app.use('/memories', memoriesRouter);


// spotify setup

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
});

spotifyApi
.clientCredentialsGrant()
.then(data => spotifyApi.setAccessToken(data.body['access_token']))
.catch(error => console.log('Something went wrong when retrieving an access token', error));

// spotify ROUTES (to be moved later)

  app.get("/test", async (req, res) => {
    
      const searchTracks = spotifyApi.searchTracks(req.query.search)
      searchTracks.then(data => {
              console.log('The received data from the API: ', data.body);
              res.render('test',  { tracks: data.body.tracks.items})
          })
          .catch(err => console.log('The error while searching artists occurred: ', err));

    });
  

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


module.exports = app;
